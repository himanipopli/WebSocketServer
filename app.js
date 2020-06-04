var SocketServer = require('ws').Server;
var wss = new SocketServer({ port:3000 });
wss.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        console.log("Received: " + message);
        ws.send("From Server: " + message);
    });
    ws.on('close', function () {
        console.log("Client Lost!");
    });
    console.log("Client Connected!");
});