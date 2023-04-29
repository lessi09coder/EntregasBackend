const { getProductService, createProductService, getProductByIdService } = require("../services/productsService.js");

const addProduct= (req, res) => {
    let response = createProductService(req.body);
    res.send(response);
};

const getProducts = async (req, res) => {
    const limit = req.query.limit || 3;
    const page = req.query.page || 1;       
    let productsView = await getProductService(limit, page);    
    let user = req.session || "no existe usuario conectado." 
    
    res.render('productsHBS' ,{title: "Productos", productsView, user});
};    

const getProdudtById = async (req , res) => {
    const id = req.params.pid
    let user = req.session || "no existe usuario conectado." 

    //console.log("el user de la session es:",user)

    let productsViewId = await getProductByIdService(id)
    res.render('productIDHBS' , {title: "Producto por ID", productsViewId , user});
};


module.exports = { getProducts , addProduct , getProdudtById};