const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
const ProductManager = require('./ProductManager.js')

let productos = new ProductManager();

//let prueba = [{hola: 11}]
app.get('/',(req,res)=>{
    res.send("hola")
})

app.get('/products', (req,res)=>{
    let products = productos.getProducts();
    let limit = req.query.limit
    if(limit){
        productsLimit = products.splice(0,limit)
        res.send(productsLimit)
    } else res.send(products)    
})

app.get('/products/:pId', (req,res)=>{
    let paramsId = req.params.pId
    let uno = productos.getProductById(paramsId) 
    res.send(uno)
})

const server = app.listen ( 8080 , ()=> console.log('server running on port 8080'));
server.on('error' , error => console.log(error));