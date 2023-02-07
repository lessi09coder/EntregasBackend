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



app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//CONFIGURAR MOTOR DE PLANTILLAS:
//.engine les dice que los ficheros con extencion .handlebars usen el motor tradido de handlebars.engine().
app.engine('handlebars', handlebars.engine())
//luego decimos en .set() que 'view engine' utilizara extencianes handlebars, por defecto express buscara en la carpeta /views la plantilla que utilizara, y en /views/layouts por defecto va el layout por defecto "main" o "index".
app.set('view engine', 'handlebars')
app.set('views', './views');

//las rutas que utilizaremos en la web:
/* app.use('/api/product', producRouter) */
app.use('/api/products', productsRealTime)


//al dominio HOME le envioamos todosProductos y con el handlebars los ponemos en la web
app.get('/', (req, res) => {
    //Enviamos a handlebars "home" un objeto que tiene primero la variable todosProductos que los obtenemos de .getProducts() y luego el title que queremos que tenga el html.
    res.render('home', { todosProductos, title: "Main Productos" })
})

const PORT = 8080;
const httpServer = app.listen(PORT, () => console.log("Server running on PORT 8080"));

//creamos un servidor con sockets :
const io = new Server(httpServer);

//.on escucha en este caso las conecciones, el "socket" que recibe la funcion es un cliente web que se conectó, entonces recibe 'connection' y realiza lo que le pedimos luego:
io.on('connection', socket => {
    console.log('Nuevo user conectado')
    socket.emit('todosLosProductosClientes', todosProductos)
    //io.sockets es para enviarselos a todos los clientes conectados
    //io.sockets.emit('todosLosProductosClientes', todosProductos)
})


//console.log(todotodo)
module.exports = {    
    httpServer,
    emitProducs: async (pro)=>{
        await mgProducts.addProduct(pro)
    }
    
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

