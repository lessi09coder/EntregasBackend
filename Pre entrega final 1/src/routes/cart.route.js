const { Router } = require('express');
const cartRouter = Router();
const CartManager = require('../CartManager');
let mgCart = new CartManager();
const ProductManager = require('../ProductManager');
let mgProductos = new ProductManager();

//ruta referencia http://localhost:8080/api/cart
cartRouter.get('/:cId', (req, res) => {
    let cart = mgCart.getCart();  
    
    res.send(cart)
})

cartRouter.post('/', (req,res)=>{
    mgCart.newCart()
    res.send(`se creo el carrito `)
})

cartRouter.post('/:cid/product/:pid', (req,res)=>{
    let cartId = parseInt(req.params.cid);
    let productId = parseInt(req.params.pid);

    const productById = mgProductos.getProductById(productId);
    mgCart.addCart(productById.id, cartId);
    res.send("proceso");

})

module.exports = cartRouter;