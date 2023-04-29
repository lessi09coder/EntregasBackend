const { Router } = require("express");
const { getCarts, createCart, addProductCart, productInCart } = require("../controllers/cartControllers.js");
const areYouAdmin = require('../midlewares/areYouAdmin.js')
const areYouUser = require('../midlewares/areYouUser.js')
const cartsRouter = Router();

cartsRouter.get('/', areYouUser, getCarts);
cartsRouter.post('/', createCart);
//cartsRouter.post('/:cid/product/:pid', addProductCart) este es el de antes!
cartsRouter.post('/:cid/product/:pid', areYouAdmin, addProductCart);
cartsRouter.get('/:cid', areYouUser, productInCart);

module.exports = cartsRouter;