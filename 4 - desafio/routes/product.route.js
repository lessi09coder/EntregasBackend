/* const { Router } = require('express');

const productRouter = Router();

const ProductManager = require('../ProductManager');
let mgProductos = new ProductManager();



productRouter.get('/:pId', (req, res) => {
    let paramsId = req.params.pId
    let uno = mgProductos.getProductById(paramsId)
    
    res.render('realTimeProducts', { uno , title: "RealTimeProducts" })
})

module.exports = productRouter; */