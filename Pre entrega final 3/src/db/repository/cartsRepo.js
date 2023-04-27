const CartDAO = require('../DAO/cart.dao.js');
const cartDAO = new CartDAO();

class UserRepository {

    createUserRepo = async (user, cartId) => {
        const newUser = await cartDAO.createUser(user, cartId);
        return newUser;
    };

    getUserByEmailRepo = async (email) => {
        const user = await cartDAO.getUserEmail(email);
        return user;
    }

    findUserRepo = async (user) => {
        const userInDB = await cartDAO.findUser(user);
        return userInDB;
    };
}

module.exports = UserRepository