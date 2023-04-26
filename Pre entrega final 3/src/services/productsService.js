const ProductsMongoDb = require("../db/DAO/products.dao.js");
//import { userSchema } from "../db/models/user.model.js"
//const userSchema = require('../db/models/user.model.js')
const productSchema = require("../db/model/products.model.js");

//en la clase ContendedorMongoDb tenemos la colleccion y al lado el esquema indicado
const productDAO = new ProductsMongoDb('products', productSchema)

const getProductService = async (limit , page ) => {
    let product = await productDAO.getProducts(limit , page )
    //console.log(users)
    return product
}

const getProductByIdService = async (id) => {
    let resp = productDAO.getProductById(id)
    return resp
}

const createProductService = (prod) => {
    let response =  productDAO.createProduct(prod)
    return response
}

module.exports = { getProductService, createProductService, getProductByIdService };