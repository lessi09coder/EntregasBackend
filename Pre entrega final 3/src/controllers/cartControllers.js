const { getCartService, createCartService, addProductCartService, productInCartService } = require("../services/cartsService.js");

const getCarts = async (req, res) => {
    let carts = await getCartService()
    console.log(carts)    
    res.send(carts)
};

const createCart = async (req, res) => {
    let AddCart = await createCartService()
    res.send(AddCart)
};

const addProductCart = async (req, res) => {
    console.log("params recibidos en addProductCart:" ,req.params.cid, req.params.pid)
    let addProduct = await addProductCartService(req.params.cid, req.params.pid)
    
    res.send(addProduct)
};

// este no va
const productInCart = async (req, res) => {
    let proInCart = await productInCartService(req.params.cid)
    //console.log(proInCart)
    res.render('cartHBS', { title: "Carrito", proInCart })
};

module.exports = { getCarts, createCart, addProductCart, productInCart };