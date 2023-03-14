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

    async getProducts(limit , page  ) {
        try {
                    
            let products = await this.productsCollection.paginate( {} , { limit: limit, page: page , lean:true})            
                products.prevLink = products.hasPrevPage?`http://localhost:8080/api/products?page=${products.prevPage}`:'';         
                products.nextLink = products.hasNextPage?`http://localhost:8080/api/products?page=${products.nextPage}`:'';
            
            //products.isValid= !(page<=0||page>products.totalPages)
 
            /* const data = {
                productos : products.docs, 
                hasPrevPage: products.hasPrevPage,
                prevPage : products.prevPage,
                hasNextPage: products.hasNextPage,
                nextPage: products.nextPage
            }
            console.log(data) */
            
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
        try {
            const product = await this.productsCollection.findOne({ _id: id }).lean()
            console.log(product)
            if (!product) {
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