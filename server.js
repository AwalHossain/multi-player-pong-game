const io = require('socket.io')

const apiServer = require('./api');

const server = require('http').createServer(apiServer);
const sockets = require('./sockets');

const socketServer = (server,{
    cors:{
        origin:"*",
        methods:['GET','POST']
    }
});


const PORT = 3000;



server.listen(PORT);
console.log(`Listenning on port ${PORT}...`);

sockets.listen(io);