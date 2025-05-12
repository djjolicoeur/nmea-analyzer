// server/nmea-bridge.js
const dgram = require('dgram');
const WebSocket = require('ws');

const WS_PORT = 3000;

// Create WebSocket server
const wss = new WebSocket.Server({ port: WS_PORT });

// Store active connections
const connections = new Map();

function createUDPConnection(ws, host, port) {
    const udpClient = dgram.createSocket('udp4');
    let buffer = '';

    console.log(`Setting up UDP listener for ${host}:${port}`);

    udpClient.on('listening', () => {
        const address = udpClient.address();
        console.log(`UDP Client listening on ${address.address}:${address.port}`);
        ws.send(JSON.stringify({
            type: 'status',
            status: 'connected'
        }));
    });

    udpClient.on('message', (message, remote) => {
        console.log(`Received UDP message from ${remote.address}:${remote.port}`);
        const data = message.toString();
        console.log('Data:', data);

        // Split data into lines and process each NMEA sentence
        const lines = data.split('\n');
        lines.forEach(line => {
            if (line.trim() && ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({
                    type: 'nmea',
                    data: line.trim()
                }));
            }
        });
    });

    udpClient.on('error', (err) => {
        console.error('UDP error:', err);
        ws.send(JSON.stringify({
            type: 'status',
            status: 'error',
            error: err.message
        }));
    });

    // Bind to receive UDP messages
    udpClient.bind({
        address: '0.0.0.0',  // Listen on all available network interfaces
        port: port
    });

    return udpClient;
}

wss.on('connection', (ws) => {
    console.log('New WebSocket client connected');

    ws.on('message', (message) => {
        try {
            const msg = JSON.parse(message);
            console.log('Received message:', msg);
            
            if (msg.type === 'connect') {
                console.log(`Setting up UDP listener for ${msg.host}:${msg.port}`);
                const existing = connections.get(ws);
                if (existing) {
                    existing.close();
                }
                
                const udpClient = createUDPConnection(ws, msg.host, msg.port);
                connections.set(ws, udpClient);
            } 
            else if (msg.type === 'disconnect') {
                const udpClient = connections.get(ws);
                if (udpClient) {
                    udpClient.close();
                    connections.delete(ws);
                }
            }
        } catch (err) {
            console.error('Error handling message:', err);
            ws.send(JSON.stringify({
                type: 'status',
                status: 'error',
                error: 'Invalid message format'
            }));
        }
    });

    ws.on('close', () => {
        console.log('WebSocket client disconnected');
        const udpClient = connections.get(ws);
        if (udpClient) {
            udpClient.close();
            connections.delete(ws);
        }
    });
});

// Handle process termination
process.on('SIGINT', () => {
    console.log('Shutting down...');
    connections.forEach((client) => {
        client.close();
    });
    process.exit(0);
});

console.log(`NMEA bridge server running on ws://localhost:${WS_PORT}`);
