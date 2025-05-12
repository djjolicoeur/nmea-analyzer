// test-udp-both.js
const dgram = require('dgram');
const os = require('os');

const PORT = 11123;
const MULTICAST_ADDR = '239.200.1.100';
const BROADCAST_ADDR = '255.255.255.255';
const INTERFACE_ADDRESS = '192.168.1.201'; // Your en0 IPv4 address

const client = dgram.createSocket({
    type: 'udp4',
    reuseAddr: true,
});

client.on('listening', () => {
    const address = client.address();
    console.log(`UDP Client listening on ${address.address}:${address.port}`);
    
    // Enable broadcast
    client.setBroadcast(true);
    
    // Bind specifically to the interface
    try {
        // Try broadcast
        console.log('Enabling broadcast...');
        
        // Try multicast with specific interface
        console.log('Setting up multicast...');
        client.setMulticastTTL(128);
        client.setMulticastLoopback(true);
        client.addMembership(MULTICAST_ADDR, INTERFACE_ADDRESS);
        console.log(`Added multicast membership for ${MULTICAST_ADDR} on ${INTERFACE_ADDRESS}`);
    } catch (err) {
        console.error('Setup error:', err);
    }
});

client.on('message', (msg, rinfo) => {
    const timestamp = new Date().toISOString();
    console.log(`\n[${timestamp}] Received message from ${rinfo.address}:${rinfo.port}`);
    console.log('Data:', msg.toString());
});

client.on('error', (err) => {
    console.error('UDP error:', err);
});

// Bind specifically to the interface
client.bind({
    port: PORT,
    address: INTERFACE_ADDRESS,
    exclusive: false
}, () => {
    console.log(`\nBound to ${INTERFACE_ADDRESS}:${PORT}`);
    console.log('Waiting for messages...');
});

// Print periodic status
setInterval(() => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Still listening...`);
}, 5000);

// Handle process termination
process.on('SIGINT', () => {
    console.log('Shutting down...');
    client.close();
    process.exit();
});
