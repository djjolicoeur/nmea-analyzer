// test-udp-receiver.js
const dgram = require('dgram');

const PORT = 11123;
const MULTICAST_ADDR = '239.200.1.100';
const INTERFACE_ADDRESS = '192.168.1.201'; // Your en0 IPv4 address

const client = dgram.createSocket({
    type: 'udp4',
    reuseAddr: true,
    reusePort: true  // Add this to allow port reuse
});

client.on('listening', () => {
    const address = client.address();
    console.log(`\nUDP Client listening on ${address.address}:${address.port}`);
    console.log('Local interface address:', INTERFACE_ADDRESS);
    
    try {
        // Enable broadcast
        client.setBroadcast(true);
        console.log('Broadcast enabled');
        
        // Set up multicast
        client.setMulticastTTL(128);
        client.setMulticastLoopback(true);
        
        // Try adding membership with different interfaces
        try {
            client.addMembership(MULTICAST_ADDR); // Try default interface
            console.log(`Added multicast membership for ${MULTICAST_ADDR} (default interface)`);
        } catch (err) {
            console.log('Failed to add membership with default interface:', err.message);
        }
        
        try {
            client.addMembership(MULTICAST_ADDR, INTERFACE_ADDRESS);
            console.log(`Added multicast membership for ${MULTICAST_ADDR} on ${INTERFACE_ADDRESS}`);
        } catch (err) {
            console.log('Failed to add membership with specific interface:', err.message);
        }
        
        try {
            client.addMembership(MULTICAST_ADDR, '0.0.0.0');
            console.log(`Added multicast membership for ${MULTICAST_ADDR} on 0.0.0.0`);
        } catch (err) {
            console.log('Failed to add membership with 0.0.0.0:', err.message);
        }
    } catch (err) {
        console.error('General setup error:', err);
    }
});

client.on('message', (msg, rinfo) => {
    const timestamp = new Date().toISOString();
    console.log(`\n[${timestamp}] Received message from ${rinfo.address}:${rinfo.port}`);
    console.log('Data:', msg.toString());
});

client.on('error', (err) => {
    console.error('UDP error:', err);
    console.error('Error details:', {
        code: err.code,
        message: err.message,
        errno: err.errno
    });
});

// Bind to all interfaces
client.bind({
    port: PORT,
    address: '0.0.0.0',  // Listen on all interfaces
    exclusive: false
}, () => {
    console.log(`\nBound to port ${PORT} on all interfaces`);
    console.log('Waiting for messages...');
});

// Print periodic status with more info
setInterval(() => {
    const timestamp = new Date().toISOString();
    const address = client.address();
    console.log(`\n[${timestamp}] Status Update:`);
    console.log(`- Listening on ${address.address}:${address.port}`);
    console.log(`- Multicast address: ${MULTICAST_ADDR}`);
    console.log(`- Interface address: ${INTERFACE_ADDRESS}`);
}, 5000);

// Handle process termination
process.on('SIGINT', () => {
    console.log('Shutting down receiver...');
    client.close();
    process.exit();
});
