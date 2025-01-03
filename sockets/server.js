const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const {Server} = require('socket.io');

const app = express();
const server = createServer(app);
const io =new Server(server);

io.on('connection',(socket)=>{
    console.log('new connection');
    socket.on('chat',(msg)=>{
        console.log(msg)
        io.emit('chat1',msg);
    })
})

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});


// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// });

// server.on('connection',()=>{
//     console.log('new connection');
// });


// server.listen(3000,()=>{
//     console.log('server is running on port 3000');
// });




