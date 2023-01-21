const apiServer = require('./api');

const server = require('http').createServer(apiServer);
const socketServer = require('./sockets');

const io = require('socket.io')(server,{
    cors:{
        origin:"*",
        methods:['GET','POST']
    }
});


const PORT = 3000;



server.listen(PORT);
console.log(`Listenning on port ${PORT}...`);

socketServer(io);