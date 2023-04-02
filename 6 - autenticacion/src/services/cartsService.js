const CartsMongoDb = require("../db/carts.dao.js");
//import { userSchema } from "../db/models/user.model.js"
//const userSchema = require('../db/models/user.model.js')
const cartSchema = require("../db/model/carts.model.js");

//en la clase ContendedorMongoDb tenemos la colleccion y al lado el esquema indicado
const cartDAO = new CartsMongoDb('carts', cartSchema)

const getCartService = async () => {
    let users = await cartDAO.getCarts()
    return users
}

const createCartService = async (cart) => {
    let response = await cartDAO.createCart(cart)
    return response
}

const addProductCartService = async (id, productId) => {
    let response = await cartDAO.addProductCart(id, productId)
    return response
}

const productInCartService = async (prodId) => {
    let getProductInCart = await cartDAO.getProductsInCart(prodId)
    return getProductInCart
}


module.exports = { getCartService, createCartService, addProductCartService, productInCartService };  