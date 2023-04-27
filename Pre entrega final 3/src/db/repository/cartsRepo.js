const CartDAO = require('../DAO/carts.dao.js');
const cartDAO = new CartDAO();

class CartRepository {

    createCartRepo = async () => {
        const cart = await cartDAO.createCart();
        return cart;
    };

    getCartRepo = async (e) => {
        const cart = await cartDAO.getCarts(e);
        return cart;
    };

    getProductsInCartRepo = async (email) => {
        const user = await cartDAO.getProductsInCart(email);
        return user;
    }

}

module.exports = CartRepository