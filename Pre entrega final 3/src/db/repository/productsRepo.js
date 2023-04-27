const ProductsDAO = require('../DAO/products.dao.js');
const productDAO = new ProductsDAO();

class productRepository {

    createProductRepo = async (prod) => {
        const newProduct = await productDAO.createProduct(prod);
        return newProduct;
    };

    getProductRepo = async (limit, page) => {
        const products = await productDAO.getProducts(limit, page);
        return products;
    }

    getProductByIdRepo = async (id) => {
        const product = await productDAO.getProductById(id);
        return product;
    };
}

module.exports = productRepository