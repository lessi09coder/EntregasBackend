const { Router } = require("express");
const { getCarts, createCart, addProductCart, productInCart } = require("../controllers/cartControllers.js");
const purchaseProductsTicket = require('../controllers/tikectsControllers.js')
const areYouAdmin = require('../midlewares/areYouAdmin.js')
const areYouUser = require('../midlewares/areYouUser.js')
const cartsRouter = Router();

cartsRouter.get('/', areYouUser, getCarts);
cartsRouter.post('/', createCart);
//cartsRouter.post('/:cid/product/:pid', addProductCart) este es el de antes!
cartsRouter.post('/:cid/product/:pid', areYouUser, addProductCart);


cartsRouter.get('/:cid', areYouUser, productInCart);


cartsRouter.get('/:cid/purchase' , purchaseProductsTicket)

//app.use('/api/carts', cartsRouter);
//http://localhost:8080/api/carts/644ad895697e7a8327705558/product/6429bcccef6cdd151e1d1b59

module.exports = cartsRouter;