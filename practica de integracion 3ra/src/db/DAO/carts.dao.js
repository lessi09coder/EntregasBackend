const CartModel = require("../model/carts.model.js");
const CartsDTO = require("../DTO/cartsDto.js")

const mongoose = require("mongoose");


const MONGODB = process.env.MONGODB
//const productDAO = new ProductsMongoDb('products', productSchema)

mongoose.connect(MONGODB, error => {
    if (error) {
        console.log('Cannot connect to db')
        process.exit()
    }
});


class CartDAO {

    async getCarts() {
        try {
            let carts = await CartModel.find().lean()
            //.lean() es para usar HBS o tambien podemos instalar las dependencias de dev "npm i -D handlebars@versionQueSea"

            //console.log(products)
            return carts
        } catch (error) {
            console.log(error)
        }
    }

    async createCart() {
        try {
            let result = await CartModel.create({})
            //let newCart = result.save()
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async addProductToCart(cid, pid) {
        try {
            const cartById = await CartModel.findOne({ _id: cid })
            if (!cartById) {
                return `no existe un carrito con el id: ${cid}`
            }

            /* const productById = await productDAO.getProductById({ _id: pid })
            if (!productById) {
                return `no existe un producto con el id: ${pid}`
            } */

            const indexPro = cartById.products.findIndex(e => String(e.product) === pid)
            if (indexPro >= 0) {
                cartById.products[indexPro].qt += 1
            } else {
                const newProd = { product: pid }
                cartById.products.push(newProd)
            }

            const saveCart = await cartById.save()
            return saveCart.products
        }
        catch (error) {
            console.log(error)
        }
    }

    async getProductsInCart(idCart) {
        try {
            const cartById = await CartModel.findOne({ _id: idCart }).lean()
                .populate("products.product")
            if (!cartById) {
                return `no existe un carrito con el id: ${idCart}`
            }
            const prod = cartById.products
            return prod

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = CartDAO

/* 
class CartsMongoDb {

    constructor(collection, schema) {
        this.cartsCollection = mongoose.model(collection, schema);
    }

    async getCarts() {
        try {
            let carts = await this.cartsCollection.find().lean()
            //.lean() es para usar HBS o tambien podemos instalar las dependencias de dev "npm i -D handlebars@versionQueSea"

            //console.log(products)
            return carts
        } catch (error) {
            console.log(error)
        }
    }

    createCart() {
        try {
            let result = new this.cartsCollection
            let newCart = result.save()
            return newCart
        } catch (error) {
            console.log(error)
        }
    }

    async addProductCart(id, proId) {
        try {
            const cartById = await this.cartsCollection.findOne({ _id: id })
            if (!cartById) {
                return `no existe un carrito con el id: ${id}`
            }

            const productById = await productDAO.getProductById({ _id: proId })
            if (!productById) {
                return `no existe un producto con el id: ${proId}`
            }

            const indexPro = cartById.products.findIndex(e => String(e.product) === proId)
            if(indexPro >= 0) {
                cartById.products[indexPro].qt += 1
            } else {
                const newProd = {product: proId}
                cartById.products.push(newProd)
            }

            const saveCart = await cartById.save()
            return saveCart.products
        }
        catch (error) {
            console.log(error)
        }
    }

    async getProductsInCart(cartId) {
        try{
            const cartById = await this.cartsCollection.findOne({ _id: cartId }).lean()
                    .populate("products.product")
            if(!cartById){
                return `no existe un carrito con el id: ${cartId}`
            }
            const prod = cartById.products
            return prod
            
        }catch (error) {
            console.log(error)
        }
    }
};


module.exports = CartsMongoDb; */