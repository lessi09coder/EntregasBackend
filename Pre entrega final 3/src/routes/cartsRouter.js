const { Router } = require("express");
const { getCarts , createCart, addProductCart ,productInCart} = require("../controllers/cartControllers.js");

const cartsRouter = Router();

cartsRouter.get('/', getCarts);
cartsRouter.post('/', createCart);
//cartsRouter.post('/:cid/product/:pid', addProductCart) este es el de antes!
cartsRouter.post('/:cid/product/:pid', addProductCart);
cartsRouter.get('/:cid', productInCart);

module.exports = cartsRouter;