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

    getUserByIdRepo = async (id) => {
        const userInDB = await userDAO.getUserId(id);
        return userInDB;
    };

    getUserByEmailPassportRepo = async (email) => {
        const user = await userDAO.getUserEmailPassport(email);
        return user;
    }

    updatePasswordRepo = async (idUser, newPassword) => {
        const res = await userDAO.updatePasswordRepo(idUser, newPassword);
        return res;
    }

    deleteUserRepo = async (uid) => {        
        const res = await userDAO.deleteUser(uid);
        return res;
    }

    updateDocumentsStatus= async (uid, documentStatus) =>{
        const res = await userDAO.updateDocument(uid , documentStatus);
        return res
    }
}



module.exports = UserRepository