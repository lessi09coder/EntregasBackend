import { getCartService, createCartService, addProductCartService, productInCartService } from "../services/cartsService.js";


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
    let addProduct = await addProductCartService(req.params.cid, req.params.pid)
    res.send(addProduct)
}

const productInCart = async (req, res) => {
    let proInCart = await productInCartService(req.params.cid)
    console.log(proInCart)
    res.render('cartHome', { title: "Carrito", proInCart })
}

export { getCarts, createCart, addProductCart, productInCart }