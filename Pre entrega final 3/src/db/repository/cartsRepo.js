const CartDAO = require('../DAO/carts.dao.js');
const cartDAO = new CartDAO();

class CartRepository {

    createCartRepo = async (user, cartId) => {
        const cart = await cartDAO.createUser(user, cartId);
        return cart;
    };

    findCartRepo = async (user) => {
        const cart = await cartDAO.findUser(user);
        return cart;
    };

    getCartByEmailRepo = async (email) => {
        const user = await cartDAO.getUserEmail(email);
        return user;
    }

}

module.exports = CartRepository