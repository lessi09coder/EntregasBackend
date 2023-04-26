const { Router } = require("express");
const {getProducts , addProduct , getProdudtById} = require("../controllers/productControllers.js");
const areYouAdmin = require("../midlewares/areYouAdmin.js");

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:pid', getProdudtById);

productsRouter.post('/', addProduct);

module.exports = productsRouter;


//areYouAdmin para chequear si es admin