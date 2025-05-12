// test-udp-sender.js
const dgram = require('dgram');

const PORT = 11123;
const MULTICAST_ADDR = '239.200.1.100';
const INTERFACE_ADDRESS = '192.168.1.201'; // Your en0 IPv4 address

const client = dgram.createSocket({
    type: 'udp4',
    reuseAddr: true
});

// Set up the client after binding
client.bind({
    address: INTERFACE_ADDRESS,
    port: 0  // Let the OS assign a random port for sending
}, () => {
    console.log('Sender bound to', client.address());
    
    // Now we can set broadcast and multicast options
    client.setBroadcast(true);
    client.setMulticastTTL(128);
    
    // Start sending messages
    setInterval(() => {
        const message = Buffer.from('TEST NMEA DATA\n');
        const timestamp = new Date().toISOString();
        
        // Try multicast
        client.send(message, 0, message.length, PORT, MULTICAST_ADDR, (err) => {
            if (err) {
                console.error(`[${timestamp}] Error sending multicast:`, err);
            } else {
                console.log(`[${timestamp}] Sent multicast message to ${MULTICAST_ADDR}:${PORT}`);
            }
        });
        
        // Try broadcast
        client.send(message, 0, message.length, PORT, '255.255.255.255', (err) => {
            if (err) {
                console.error(`[${timestamp}] Error sending broadcast:`, err);
            } else {
                console.log(`[${timestamp}] Sent broadcast message to 255.255.255.255:${PORT}`);
            }
        });
    }, 5000);
});

client.on('error', (err) => {
    console.error('Client error:', err);
});

// Handle process termination
process.on('SIGINT', () => {
    console.log('Shutting down sender...');
    client.close();
    process.exit();
});
