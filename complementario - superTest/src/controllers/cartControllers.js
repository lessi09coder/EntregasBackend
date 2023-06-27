const { getCartService, createCartService, addProductCartService, productInCartService } = require("../services/cartsService.js");

const getCarts = async (req, res) => {
    let carts = await getCartService()
    //console.log(carts)    
    res.send(carts)
};

const createCart = async (req, res) => {
    let AddCart = await createCartService()    
    res.send({ status: "success", data: AddCart, payload: `el carrito ${AddCart._id} fue creado.` })
};

const addProductCart = async (req, res) => {    
    let addProduct = await addProductCartService(req.params.cid, req.params.pid)
    res.send({ status: "success", data: addProduct, payload: `el producto: ${req.params.pid} fue agregado al carrito: ${req.params.cid} .` })
};

// este no va
const productInCart = async (req, res) => {
    let proInCart = await productInCartService(req.params.cid)
    //console.log(proInCart)
    res.render('cartHBS', { title: "Carrito", proInCart })
};

module.exports = { getCarts, createCart, addProductCart, productInCart };