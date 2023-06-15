const CartRepository = require("../db/repository/cartsRepo.js");
const cartRepo = new CartRepository()
//import { userSchema } from "../db/models/user.model.js"
//const userSchema = require('../db/models/user.model.js')
//const CartModel = require("../db/model/carts.model.js");

//en la clase ContendedorMongoDb tenemos la colleccion y al lado el esquema indicado


//const cartDAO = new CartsMongoDb('carts', cartSchema)

const createCartService = async () => {
    let response = await cartRepo.createCartRepo()
    return response
};

const getCartService = async () => {
    let users = await cartRepo.getCartRepo()
    return users
}

const addProductCartService = async (cid, pid) => {
    let response = await cartRepo.addProductToCartRepo(cid, pid)
    return response
}

const productInCartService = async (cid) => {
    let getProductInCart = await cartRepo.getProductsInCartRepo(cid)
    return getProductInCart
}


module.exports = { createCartService, getCartService, addProductCartService, productInCartService };