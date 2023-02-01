const fs = require('fs')

class CartManager {
    
    constructor() {
        this.cart = [];
        this.path = './carrito.json'
    }

    getCart() {
        //let productsList = this.products.slice(); 
        return JSON.parse(fs.readFileSync(this.path, 'utf-8'));
    };

    getCartById(id) {
        let listParse = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
        let existID = listParse.find(e => e.id == id);
        if (existID) {
            return existID
        } else return "cart not found"
    };

    incrementalId(){        
        let cart = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
        if(cart.length == 0){
            return 0
        }else {
            let idCart = cart[cart.length - 1].id
            return idCart + 1 
        }       
        
    }
    
    newCart(){
        const cartParse = this.getCart()
        let newCart ={            
            id: this.incrementalId(),
            products : [],
        }
        cartParse.push(newCart)
        fs.writeFileSync(this.path, JSON.stringify(cartParse))        
        let idSend = newCart.id
        return idSend
    }

    //addCart trae el id del producto y el id del carrito segun los params
    addCart( productById , cartId) {
        //let idd = this.cart.length
        let cart = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
        console.log(productById)
        console.log(cartId)
        //console.log(cart[0].id)
        if(cart == ""){
            console.log("hola no hay carrito id")

        }else {
            console.log("hola 2")
            //console.log(cart[cartId].id)            
            let cartParse = cart[cartId];            
            let findProductParse = cartParse.products.find(e => e.id == productById);
            console.log(findProductParse)
            if(findProductParse){        
                let posIndex = cartParse.products.findIndex(e => e.id == productById)
                cartParse.products[posIndex].qy += 1
                fs.writeFileSync(this.path, JSON.stringify(cart))
            }else {
                let NewProductsCart = {                    
                    id : productById,
                    qy : 1,
                }
                cartParse.products.push(NewProductsCart)
                //cart.push(cartParse)
                fs.writeFileSync(this.path, JSON.stringify(cart))
            }
            console.log(cartParse)
            //fs.writeFileSync(this.path, JSON.stringify(cartParse))
        }
     
    };
}

module.exports = CartManager;