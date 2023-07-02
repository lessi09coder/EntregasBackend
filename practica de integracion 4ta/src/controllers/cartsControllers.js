const { getCartService, createCartService, addProductCartService, productInCartService } = require("../services/cartsService.js");

const getCarts = async (req, res) => {
    try {
        let carts = await getCartService()
        res.send({ status: "success", data: carts, payload: "el carrito fue traido." })
    } catch (error) {
        res.status(500).send({
            status: "not success",
            message: "Error al agregar el producto al carrito",
            error: error.message
        })
    };
};

const createCart = async (req, res) => {
    try {
        let AddCart = await createCartService()
        res.send({ status: "success", data: AddCart, payload: `el carrito ${AddCart._id} fue creado.` })
    } catch (error) {
        res.status(500).send({
            status: "not success",
            message: "Error al agregar el producto al carrito",
            error: error.message
        })
    };
};

const addProductCart = async (req, res) => {
    try {
        let addProduct = await addProductCartService(req.params.cid, req.params.pid)
        res.send({ status: "success", data: addProduct, payload: `el producto: ${req.params.pid} fue agregado al carrito: ${req.params.cid} .` })
    } catch (error) {
        res.status(500).send({
            status: "not success",
            message: "Error al agregar el producto al carrito",
            error: error.message
        })
    };
};

// este no va
const productInCart = async (req, res) => {
    let proInCart = await productInCartService(req.params.cid)
    res.render('cartHBS', { title: "Carrito", proInCart })
};


// const addProductCart = async (req, res) => {
/*   try {
    let addProduct = await addProductCartService(req.params.cid, req.params.pid);
    res.send({
      success: true,
      message: 'Producto agregado al carrito correctamente',
      data: addProduct
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Error al agregar el producto al carrito',
      error: error.message
    });
  }
}; */
module.exports = { getCarts, createCart, addProductCart, productInCart };