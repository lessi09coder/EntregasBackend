const UserDAO = require('../DAO/user.dao.js');
const userDAO = new UserDAO();

class UserRepository {
    
    createUserRepo = async (user, cartId) => {
        const newUser = await userDAO.createUser(user, cartId);
        return newUser;
    };

    getUserByEmailRepo = async (email) => {
        const user = await userDAO.getUserEmail(email);
        return user;
    }

    findUserRepo = async (user) => {
        const userInDB = await userDAO.findUser(user);
        return userInDB;
    };
}


module.exports = UserRepository