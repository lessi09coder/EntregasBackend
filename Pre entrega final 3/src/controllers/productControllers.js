const { getProductService, createProductService, getProductByIdService } = require("../services/productsService.js");

const getProducts = async (req, res) => {
    const limit = req.query.limit || 3;
    const page = req.query.page || 1;       
    let productsView = await getProductService(limit, page);    
    let user = req.session.user || "no existe usuario conectado." 
    
    res.render('productsHBS' ,{title: "Productos", productsView, user});
};    

const getProdudtById = async (req , res) => {
    const id = req.params.pid
    let user = req.session.user || "no existe usuario conectado." 
    let productsView = await getProductByIdService(id)
    res.render('productIDHBS' , {title: "Producto por ID", productsView , user});
};

const addProduct= (req, res) => {
    let response = createProductService(req.body);
    res.send(response);
};

module.exports = { getProducts , addProduct , getProdudtById};