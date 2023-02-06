const express = require('express');
const app = express();
const { Server } = require('socket.io');

app.use(express.static('public'))

/* app.get('/', (req, res) => {
    res.send('ok 111 ')
}) */

let messagesList = [];

const httpServer = app.listen(8080, () => console.log("Server running on PORT 8080"));

const io = new Server(httpServer);


io.on('connection', socket => {
    console.log('Nuevo cliente conectado')
    
    io.sockets.emit('messages', messagesList)    
    //sockets.emit('messages', messagesList)  

    socket.on('newUserLoged' , user => {
        io.sockets.emit('newUser', user)
    } )

    socket.on('message', data => {
        messagesList.push(data)        
        io.sockets.emit('messages', messagesList) // esto es para pasarle a los demas clientes conectados
    })
})

