import mongoose from "mongoose";
const dbEcommerce = "ecommerce"

mongoose.connect(`mongodb+srv://lessin09:test123@backend.5bixtxm.mongodb.net/${dbEcommerce}?retryWrites=true&w=majority`, error => {
    if (error) {
        console.log('Cannot connect to db')
        process.exit()
    }
});

class ProductsMongoDb {

    constructor(collection, schema) {
        this.productsCollection = mongoose.model(collection, schema);
    }

    async getProducts() {
        try {
            let products = await this.productsCollection.find().lean()
            //.lean() es para usar HBS o tambien podemos instalar las dependencias de dev "npm i -D handlebars@versionQueSea"
            return products
        } catch (error) {
            console.log(error)
        }
    }

    async createProduct(prod) {
        console.log(prod)
        try {
            let newProduct = new this.productsCollection(prod)
            let result = await newProduct.save()
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async getProductById(id) {
        try{
            const product = await this.productsCollection.findOne({ _id: id }).lean()
            console.log(product)
            if(!product){
                return `no existe el producto con el id ${id}`
            }
            return product
        }
        catch (error) {
            console.log(error)
        }

    }
};


export default ProductsMongoDb;