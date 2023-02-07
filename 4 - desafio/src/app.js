const express = require('express');
const handlebars = require('express-handlebars')
const app = express();
const { Server } = require('socket.io');
const productsRealTime = require('../routes/productsRealTime.js');
const ProductManager = require('./ProductManager.js')
let mgProducts = new ProductManager();

//Vamos a traer a todos los productos.
let todosProductos = [];
(() => { todosProductos = mgProducts.getProducts() })() //trae todos los productos
//console.log(todosProductos)


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views');

//las rutas que utilizaremos en la web:
/* app.use('/api/product', producRouter)
app.use('/api/products', productsRealTime) */


//al dominio HOME le envioamos todosProductos y con el handlebars los ponemos en la web
app.get('/', (req, res) => {
    res.render('home', { todosProductos, title: "Main Productos" })
})

const PORT = 8080;
const httpServer = app.listen(PORT, () => console.log("Server running on PORT 8080"));

const io = new Server(httpServer);

io.on('connection', socket => {
    console.log('Nuevo user conectado')
    
    io.sockets.emit('allProducts', todosProductos)
    
})

module.exports = {
    PORT,
    httpServer,
}





/* let messagesList = [];

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
}) */

