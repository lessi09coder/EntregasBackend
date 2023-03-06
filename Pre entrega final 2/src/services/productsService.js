import ProductsMongoDb from "../db/products.dao.js"
//import { userSchema } from "../db/models/user.model.js"
//const userSchema = require('../db/models/user.model.js')
import productSchema from "../db/models/products.model.js"

//en la clase ContendedorMongoDb tenemos la colleccion y al lado el esquema indicado
const productDAO = new ProductsMongoDb('products', productSchema)

const getProductService = async () => {
    let product = await productDAO.getProducts()
    //console.log(users)
    return product
}

const createProductService = (prod) => {
    let response =  productDAO.createProduct(prod)
    return response
}

const getProductByIdService = async (id) => {
    let resp = productDAO.getProductById(id)
    return resp
}
export { getProductService, createProductService, getProductByIdService };  