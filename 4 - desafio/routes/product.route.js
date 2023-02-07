const { Router } = require('express');

const productRouter = Router();

const ProductManager = require('../ProductManager');
let mgProductos = new ProductManager();


//ruta referencia http://localhost:8080/api/product
productRouter.get('/', (req, res) => {
    let products = mgProductos.getProducts();
    let limit = req.query.limit
    if (limit) {
        productsLimit = products.splice(0, limit)
        res.send(productsLimit)
    } else res.send(products)
})

productRouter.get('/:pId', (req, res) => {
    let paramsId = req.params.pId
    let uno = mgProductos.getProductById(paramsId)
    res.send(uno)
})

productRouter.put('/:pId', (req, res) => {
    let paramsId = parseInt(req.params.pId);
    let updateProduct = req.body
    mgProductos.updateProduct(paramsId, updateProduct)
    res.send(`El producto con id: ${paramsId} se actualizo correctamente`)
})

productRouter.post('/', (req, res) => {
    try {
        let oneAddProduct = req.body;
        let respuesta = mgProductos.addProduct(oneAddProduct)

        if(respuesta === "EXISTE"){
            res.send("ya exite el producto")
        }else res.send(`se agrego correctamente el producto: ${oneAddProduct.title}`)
    }
    catch{
        res.status(500).send("huno un error")
    }

})

productRouter.delete('/:pId', (req, res) => {
    let paramsId = req.params.pId
    mgProductos.deleteProduct(paramsId)

    res.send(`el producto con id: ${paramsId} ha sido borrado`)
})

module.exports = productRouter;