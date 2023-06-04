const { Router } = require("express");
const { getProductsMock, postProductsMock } = require("../controllers/mockingProductsControllers.js")

const mockingproductsRouter = Router();

mockingproductsRouter.post('/', postProductsMock);

mockingproductsRouter.get('/', postProductsMock);

module.exports = mockingproductsRouter