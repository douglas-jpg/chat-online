require('dotenv').config();

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: 'http://localhost:5173' },
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT;
let connectedUsers = 0;

io.on('connection', (socket) => {
    connectedUsers++;
    io.emit('update_user_count', connectedUsers);

    socket.on('disconnect', () => {
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

server.listen(PORT, () =>
    console.log(`Server is running on: http://localhost:${PORT}`)
);
