const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');
// const {user} = require('../../1 Chat App/front/Front End/src/Component/Join')


const app = express();
const port = 4500 || process.env.PORT;

const users = [{}];
app.use(cors());

app.get('/',(req,res)=>{
    console.log("Hello its Working");
})

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection",(socket)=>{
    console.log("New Connection");

    socket.on('joined',({user})=>{
        users[socket.id] = user;
        console.log(`${user} has joined`);
    })

    socket.emit('welcome',{user:"Admin",message:`Welcome to the chat ${users[socket.id]}`})
    socket.broadcast.emit('userJoined',{user:"Admin",message:`${users[socket.id]} User has joined`});



    socket.on('message',({message,id})=>{
    io.emit('sendMessage',{user:users[id],message,id});
    })

    socket.on('disconnect',()=>{
        socket.broadcast.emit('leave',{user:"Admin",message:` ${users[socket.id]} has been left`});
        // socket.broadcast.emit('leave',{user:"Admin",message:` ${users[socket.id]} has been left`})
        console.log(`User Left`);
    })
})




server.listen(port,()=>{
    console.log(`Server is working on http://localhost:${port}`);
});