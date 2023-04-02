const { Router } = require("express");
const {getProducts , addProduct , getProdudtById} = require("../controllers/productControllers.js");

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:pid' , getProdudtById );

productsRouter.post('/', addProduct);

module.exports = productsRouter;