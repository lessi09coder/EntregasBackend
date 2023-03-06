import mongoose from "mongoose";
import ProductsMongoDb from "../db/products.dao.js"
import productSchema from "../db/models/products.model.js"
const dbEcommerce = "ecommerce"
const productDAO = new ProductsMongoDb('products', productSchema)

mongoose.connect(`mongodb+srv://lessin09:test123@backend.5bixtxm.mongodb.net/${dbEcommerce}?retryWrites=true&w=majority`, error => {
    if (error) {
        console.log('Cannot connect to db')
        process.exit()
    }
});

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


export default CartsMongoDb;