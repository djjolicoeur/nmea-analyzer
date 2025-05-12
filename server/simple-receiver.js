// simple-receiver.js
const dgram = require('dgram');
const PORT = 11123;

const server = dgram.createSocket({
    type: 'udp4',
    reuseAddr: true,
    reusePort: true
});

server.on('error', (err) => {
    console.error(`Server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`[${new Date().toISOString()}] Received ${msg.length} bytes from ${rinfo.address}:${rinfo.port}`);
    console.log('Data:', msg.toString());
});

server.on('listening', () => {
    const address = server.address();
    console.log(`Server listening on ${address.address}:${address.port}`);
    server.setBroadcast(true);
    console.log('Broadcast enabled');
});

server.bind(PORT);
