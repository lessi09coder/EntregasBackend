import { getProductService, createProductService } from "../services/productsService.js";


const getProducts = async (req, res) => {
    let products = await getProductService()
    //console.log(users)
    /* let usersMapped = users.map(user=> {
        let newUser = {}
        newUser.name = user.name 
        newUser.lastname = user.lastname
        newUser.email = user.email }) */
    //console.log(usersMapped)
    //res.render('user', { users })
    
    console.log(products)
    res.render('productsHome' ,{title: "Productos", products})
};
    
const createProduct= (req, res) => {
    let response = createProductService(req.body)
    res.send(response)
};


export { getProducts , createProduct}