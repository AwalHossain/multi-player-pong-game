const server = require('http').createServer();
const io = require('socket.io')(server,{
    cors:{
        origin:"*",
        methods:['GET','POST']
    }
});


const PORT = 3000;

let readyPlayerCount = 0;

server.listen(PORT);
console.log(`Listenning on port ${PORT}...`);

io.on('connection', (socket)=>{
    console.log("a user connected..", socket.id);

    socket.on('ready', ()=>{
        console.log("Player ready", socket.id);

        readyPlayerCount++;
        if(readyPlayerCount === 2){
            // broadcast ('startGame');
            io.emit('startGame', socket.id)
        }
    })
})