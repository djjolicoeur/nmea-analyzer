// test-udp-all-interfaces.js
const dgram = require('dgram');
const os = require('os');

const PORT = 11123;
const MULTICAST_ADDR = '239.200.1.100';

// Get all network interfaces
const networkInterfaces = os.networkInterfaces();

// Create a socket
const client = dgram.createSocket({
    type: 'udp4',
    reuseAddr: true,
});

client.on('listening', () => {
    const address = client.address();
    console.log(`UDP Client listening on ${address.address}:${address.port}`);
    
    // Set multicast options
    client.setBroadcast(true);
    client.setMulticastTTL(128);
    client.setMulticastLoopback(true);
    
    // Try to add membership on all interfaces
    Object.keys(networkInterfaces).forEach((ifName) => {
        networkInterfaces[ifName].forEach((interface) => {
            // Skip internal and IPv6 interfaces
            if (!interface.internal && interface.family === 'IPv4') {
                try {
                    client.addMembership(MULTICAST_ADDR, interface.address);
                    console.log(`Added multicast membership for ${MULTICAST_ADDR} on interface ${ifName} (${interface.address})`);
                } catch (err) {
                    console.log(`Failed to add membership on ${ifName} (${interface.address}):`, err.message);
                }
            }
        });
    });
});

client.on('message', (msg, rinfo) => {
    console.log(`[${new Date().toISOString()}] Message from ${rinfo.address}:${rinfo.port}`);
    console.log('Data:', msg.toString());
});

client.on('error', (err) => {
    console.error('UDP error:', err);
});

// Bind to all interfaces
client.bind({
    port: PORT,
    address: '0.0.0.0',
    exclusive: false
}, () => {
    console.log(`Bound to port ${PORT}`);
    console.log('Waiting for multicast messages...');
});

// Print periodic status
setInterval(() => {
    console.log(`[${new Date().toISOString()}] Still listening...`);
}, 5000);
