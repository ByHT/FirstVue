const app = require('express');
const { Socket } = require('dgram');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connect', (socket)=>{
    console.log('connected');
});

http.listen(5000, () => {
 console.log('Server listening on port 5000');
});