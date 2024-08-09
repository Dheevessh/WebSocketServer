const WebSocket = require('ws');  

// Create a new WebSocket server  
const wss = new WebSocket.Server({ port: 8080 });  

// Listen for connection events  
wss.on('connection', (ws) => {  
    console.log('New client connected!');  

    // Listen for messages from clients  
    ws.on('message', (message) => {  
        console.log(`Received message: ${message}`);  
        
        // Echo the message back to the client  
        ws.send(`Server received: ${message}`);  
    });  

    // Send a welcome message to the newly connected client  
    ws.send('Welcome to the WebSocket server!');  
});  

console.log('WebSocket server is running on ws://localhost:8080');