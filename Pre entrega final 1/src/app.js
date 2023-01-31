const express = require('express');
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const productRouter = require('./routes/product.route');
const cartRouter = require('./routes/cart.route');
app.use('/api/product' , productRouter);
app.use('/api/cart' , cartRouter);

const server = app.listen ( 8080 , ()=> console.log('server running on port 8080'));
server.on('error' , error => console.log(error));