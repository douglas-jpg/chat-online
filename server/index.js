require('dotenv').config();

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: 'https://chat-online-fqwm.onrender.com' },
});

// eslint-disable-next-line no-undef
const port = process.env.PORT;
let connectedUsers = 0;

io.on('connection', (socket) => {
    console.log('Usuario conectado ' + socket.id);

    connectedUsers++;
    io.emit('update_user_count', connectedUsers);

    socket.on('disconnect', () => {
        console.log('usuario desconectado ' + socket.id);
        connectedUsers--;
        io.emit('update_user_count', connectedUsers);
    });

    socket.on('set_user', (user) => {
        socket.data.userName = user.name;
        socket.data.color = user.color;
    });

    socket.on('message', (message) => {
        io.emit('recive_message', {
            authorId: socket.id,
            author: socket.data.userName,
            color: socket.data.color,
            text: message.text,
            time: message.date,
        });
    });
});

server.listen(port, () => console.log('Server rodando'));
