const fs = require('fs')

class CartManager {
    
    constructor() {
        this.cart = [];
        this.path = './cart.JSON'
    }

    getCart() {
        //let productsList = this.products.slice(); 
        return JSON.parse(fs.readFileSync('./cart.JSON', 'utf-8'));
    };

    getCartById(id) {
        let listParse = JSON.parse(fs.readFileSync('./cart.JSON', 'utf-8'));
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

    addCart( productById , cartId) {
        //let idd = this.cart.length
        let cart = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
        console.log(productById)
        
        if (cart.find((e) => e.id == productById.id)) {            
            return "EXISTE";
        } else {
            const newCart = {
                qy: 1,
                product:productById.id,
                //id: cart.length
            }
            
            console.log(newCart)

            cart.push(newCart)
            fs.writeFileSync(this.path, JSON.stringify(cart))
        }

    };
}

module.exports = CartManager;