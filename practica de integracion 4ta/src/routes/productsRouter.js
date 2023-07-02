const { Router } = require("express");
const { getProducts, addProduct, getProdudtById, updateProduct, deleteProduct } = require("../controllers/productsControllers.js");
const areYouAdmin = require("../midlewares/areYouAdmin.js");

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:pid', getProdudtById);

productsRouter.post('/', addProduct);

productsRouter.put('/:pid', updateProduct)
productsRouter.delete('/delete/:pid', deleteProduct )
module.exports = productsRouter;


//areYouAdmin para chequear si es admin