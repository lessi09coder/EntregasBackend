const { Router } = require('express');
const routes = Router();

const userRouter = require('./userRouter.js');
const productsRouter = require('./productsRouter.js');
const cartsRouter = require('./cartsRouter.js');
const messageRouter = require('./messageRourter.js');
const mockingproductsRouter = require('./mockingproductsRouter.js')
const loggerRouter = require('./loggerRouter.js')
const errorsRouter = require('./errorsRouter.js'); 


routes.use("/api/users", userRouter)
routes.use("/api/products", productsRouter)
routes.use("/api/cart", cartsRouter)
routes.use("/api/messages", messageRouter)
routes.use('/api/mockingproducts', mockingproductsRouter)
routes.use('/api/errors', errorsRouter)
routes.use('/logger', loggerRouter)

module.exports = routes
