import { getProductService, createProductService, getProductByIdService } from "../services/productsService.js";


const getProducts = async (req, res) => {
    const limit = req.query.limit || 3;
    const page = req.query.page || 1;   
    
    let products = await getProductService(limit, page);
    
    console.log(products)
    res.render('productsHBS' ,{title: "Productos", products})
};
    
const addProduct= (req, res) => {
    let response = createProductService(req.body)
    res.send(response)
};

const getProdudtById = async (req , res) => {
    const id = req.params.pid
    let productoId = await getProductByIdService(id)
    res.render('productIDHBS' , {title: "Producto por ID", productoId})
}

export { getProducts , addProduct , getProdudtById}