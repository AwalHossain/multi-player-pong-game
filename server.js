const io = require('socket.io')
const http = require('http');
const apiServer = require('./api');

const httpServer = http.createServer(apiServer);
const sockets = require('./sockets');

const socketServer = io(httpServer,{
    cors:{
        origin:"*",
        methods:['GET','POST']
    }
});


const PORT = 3000;



httpServer.listen(PORT);
console.log(`Listenning on port ${PORT}...`);

sockets.listen(socketServer);