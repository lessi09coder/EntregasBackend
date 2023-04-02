const { getProductService, createProductService, getProductByIdService } = require("../services/productsService.js");

const getProducts = async (req, res) => {
    const limit = req.query.limit || 3;
    const page = req.query.page || 1;   
    
    let productsView = await getProductService(limit, page);
    
    
    res.render('productsHBS' ,{title: "Productos", productsView})
};    

const getProdudtById = async (req , res) => {
    const id = req.params.pid
    let productsView = await getProductByIdService(id)
    res.render('productIDHBS' , {title: "Producto por ID", productsView})
};

const addProduct= (req, res) => {
    let response = createProductService(req.body)
    res.send(response)
};

module.exports = { getProducts , addProduct , getProdudtById};