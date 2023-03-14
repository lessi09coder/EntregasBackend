import express from "express";
import productsRouter from "./routes/productsRouter.js";
import cartsRouter from "./routes/cartsRouter.js"
import messageRouter from "./routes/messageRourter.js"
import handlebars from 'express-handlebars'
import { Server } from "socket.io";
const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', './views')
app.set('view engine' , 'handlebars')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/api/products', productsRouter); 
app.use('/api/carts', cartsRouter);  
app.use("/api/messages", messageRouter)

const PORT = process.env.PORT || 8080 ;

app.get("/", (req, res) =>{
    res.send("Pre entrega N°2")
})
 
const httpServer = app.listen(PORT , ()=>{
    console.log(`Server running on port: ${httpServer.address().port}`)
});
httpServer.on('error', error => console.log(error));



let messagesList = [];
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



//export default { httpServer }