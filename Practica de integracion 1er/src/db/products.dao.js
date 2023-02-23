import mongoose from "mongoose";
const dbEcommerce = "ecommerce"

mongoose.connect(`mongodb+srv://lessin09:test123@backend.5bixtxm.mongodb.net/${dbEcommerce}?retryWrites=true&w=majority` , error => {
    if(error){
        console.log('Cannot connect to db')
        process.exit()
    }
});

class ProductsMongoDb {
 
    constructor(collection, schema){        
        this.productsCollection = mongoose.model(collection, schema);        
    }

    async getProducts(){
        try {
            let products = await this.productsCollection.find()
            console.log(products)
            return products
        } catch (error){
            console.log(error)
        }
    }

    createProduct(prod){
        try {
            let result = this.productsCollection.create(prod)
            return result
        } catch (error){
            console.log(error)
        }
    }
};


export default ProductsMongoDb;