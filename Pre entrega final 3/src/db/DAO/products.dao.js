const ProductModel = require('../model/products.model.js')
const ProductDTO = require('../DTO/productsDto.js')

const mongoose = require("mongoose");
//const dbCollecion = "sessionsBase"
const MONGODB = process.env.MONGODB
mongoose.connect(MONGODB, error => {
    if (error) {
        console.log('Cannot connect to db')
        process.exit()
    }
});

// _id, title, description, price, status, stock, category, thumbnail

const convertDataToObj = (data) => {
    const { _id, title, description, price, status, stock, category, thumbnail } = data;
    let ProductDto = new ProductDTO(_id, title, description, price, status, stock, category, thumbnail);
    return ProductDto
}

class ProductsDAO {

    async getProducts(limit, page) {
        try {
            
            let products = await ProductModel.paginate({}, { limit: limit, page: page, lean: true })
            products.prevLink = products.hasPrevPage ? `http://localhost:8080/api/products?page=${products.prevPage}` : '';
            products.nextLink = products.hasNextPage ? `http://localhost:8080/api/products?page=${products.nextPage}` : '';

            return products
        } catch (error) {
            return { message: error }
        }
    }

    async createProduct(prod) {
        console.log(prod)
        try {
            let newProduct = new ProductModel(prod)
            let result = await newProduct.save()
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async getProductById(id) {
        try {
            const product = await ProductModel.findOne({ _id: id }).lean()
            console.log(product)
            if (!product) {
                return `no existe el producto con el id ${id}`
            }
            return convertDataToObj(product)
        }
        catch (error) {
            console.log(error)
        }

    }
}

module.exports = ProductsDAO
/* 
class ProductsMongoDb {

    constructor(collection, schema) {
        this.productsCollection = mongoose.model(collection, schema);
    }

    async getProducts(limit , page  ) {
        try {
                    
            let products = await this.productsCollection.paginate( {} , { limit: limit, page: page , lean:true})            
                products.prevLink = products.hasPrevPage?`http://localhost:8080/api/products?page=${products.prevPage}`:'';         
                products.nextLink = products.hasNextPage?`http://localhost:8080/api/products?page=${products.nextPage}`:'';
                                  
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


module.exports = ProductsMongoDb; */