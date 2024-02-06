require('dotenv').config();

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: 'http://localhost:5173' },
});

const port = process.env.PORT;

server.listen(port, () => console.log('Server rodando'));
