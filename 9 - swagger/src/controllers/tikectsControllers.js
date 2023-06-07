const { productInCartService } = require('../services/cartsService.js')
const {getProductByIdService, updateProductIdService } = require('../services/productsService.js')
const { v4: uuidv4 } = require("uuid");

const purchaseProductsTicket = async (req, res) => {

    try {
        const idCart = req.params.cid
        //console.log(idCart)
        const productsInsideCart = await productInCartService(idCart)
        //console.log("el ARRAY que devuelve es:",productsInsideCart)
        let ticket
        let productToTicket = [];
        let totalPurchase = 0
        let noTicket
            //recorre los productos en el carrito y para cada uno:
            for(let productsCart of productsInsideCart ) {
                let databaseProduct = await getProductByIdService(productsCart.product._id)    
                
                
                if(productsCart.qt <= databaseProduct.stock){             
                    productToTicket.push(productsCart)
                    let updateStock = databaseProduct.stock - productsCart.qt
                    //console.log(productsCart.product._id, updateStock)
                    await updateProductIdService(productsCart.product._id , updateStock)
                    totalPurchase += productsCart.qt * productsCart.product.price
                    
                } else {
                    noTicket = productsCart.product.title
                }
            }          
        console.log(productToTicket)
        console.log(totalPurchase)

        if(productToTicket.length){
            ticket = {
                code: uuidv4(),
                purchase_datetime: new Date(),
                amount: totalPurchase,
                purchaser: req.session?.user
            }                   
        }
        res.send({ticket: ticket , noPurchase: noTicket})

    } catch (error) {
        console.log(error)
    }
    
}




module.exports = purchaseProductsTicket