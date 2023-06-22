const ProductRepository = require('../db/repository/productsRepo.js');
const productRepo = new ProductRepository();

/* //en la clase ContendedorMongoDb tenemos la colleccion y al lado el esquema indicado
const productDAO = new ProductsMongoDb('products', productSchema) */

const createProductService = (prod) => {
    let newProduct = productRepo.createProductRepo(prod)
    return newProduct
}

const getProductService = async (limit, page) => {
    let product = await productRepo.getProductRepo(limit, page)
    return product
}

const getProductByIdService = async (id) => {
    let product = productRepo.getProductByIdRepo(id)
    return product
}

const updateProductIdService = async (pid, update) => {
    let product = productRepo.updateProductIdRepo(pid, update)
    return product
}

const deleteProductByIdService = async (pid) => {
    let product = productRepo.deleteProductByIdRepo(pid)
    return product
}

module.exports = { createProductService, getProductService, getProductByIdService, updateProductIdService, deleteProductByIdService };