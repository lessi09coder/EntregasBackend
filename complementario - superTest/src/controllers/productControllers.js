const { getProductService, createProductService, getProductByIdService, updateProductIdService, deleteProductByIdService } = require("../services/productsService.js");

const addProduct = async (req, res , next) => {
    try {
        const addedProduct = await createProductService(req.body);
        console.log(`controller product devuelve ${addedProduct}`)
        res.status(200).send({ status: "success", data: addedProduct, payload: `el producto ${addedProduct.title} fue agregado.` });
    }
    catch (err) {
        next(err)
    }


};

const getProducts = async (req, res) => {
    const limit = req.query.limit || 3;
    const page = req.query.page || 1;
    let productsView = await getProductService(limit, page);
    let user = req.session || "no existe usuario conectado."

    res.render('productsHBS', { title: "Productos", productsView, user });
};

const getProdudtById = async (req, res) => {
    const id = req.params.pid
    let user = req.session || "no existe usuario conectado."

    let productsViewId = await getProductByIdService(id)
    res.render('productIDHBS', { title: "Producto por ID", productsViewId, user });
};

const updateProduct = async (req, res) => {
    const proId = req.params.pid
    const update = req.body
    const updateProductId = await updateProductIdService(proId, update)
    res.send({ status: "success", data: updateProductId, payload: `el producto ${updateProductId.title} fue modificado.` })
};

const deleteProduct = async (req, res) => {
    const proId = req.params.pid
    const deleteProductId = await deleteProductByIdService(proId)
    res.send({ status: "success", data: deleteProductId, payload: `el producto ${deleteProductId.title} fue eliminado.` })
};

module.exports = { getProducts, addProduct, getProdudtById, updateProduct, deleteProduct };