const { Router } = require("express");
const { getProductsMock } = require("../controllers/mockingProductsControllers.js")
const mockingproductsRouter = Router();

mockingproductsRouter.get('/', getProductsMock);


module.exports = mockingproductsRouter