import { getProductService, createProductService, getProductByIdService } from "../services/productsService.js";


const getProducts = async (req, res) => {
    let products = await getProductService()   
    //console.log(products)
    res.render('productsHome' ,{title: "Productos", products})
};
    
const addProduct= (req, res) => {
    let response = createProductService(req.body)
    res.send(response)
};

const getProdudtById = async (req , res) => {
    const id = req.params.pid
    let productoId = await getProductByIdService(id)
    res.render('productDetail' , {title: "Producto por ID", productoId})
}

export { getProducts , addProduct , getProdudtById}