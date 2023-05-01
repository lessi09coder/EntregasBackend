const { productInCartService } = require('../services/cartsService.js')
const {getProductByIdService } = require('../services/productsService.js')

const purchaseProductsTicket = async (req, res) => {

    try {
        const idCart = req.params.cid
        //console.log(idCart)
        const productsInsideCart = await productInCartService(idCart)
        //console.log("el ARRAY que devuelve es:",productsInsideCart)

        
        
            for(let productsCart of productsInsideCart ) {
                let databaseProduct = await getProductByIdService(productsCart.product._id)
            
                console.log("la a comprar qt es : ", productsCart.qt)
                
                if(productsCart.qt <= databaseProduct.stock){
                    console.log("SI se puede")
                } else console.log("no se puede")
            }          
       

        res.send("todo bien")
    } catch {

    }
}




module.exports = purchaseProductsTicket