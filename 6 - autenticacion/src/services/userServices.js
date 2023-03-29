const UserMongoDbDAO = require('../db/user.dao.js')
const userSchema = require('../db/model/userModel.js')
const userDAO = new UserMongoDbDAO('users', userSchema)

const createUserService = async (user) => {    
    const newUs = await userDAO.createNewUser(user)
    return newUs
}

const loginUserService = async (user) => {
    const userMongoDb = await userDAO.findUser(user);
    return userMongoDb;
};

const getUserByIdService = async (id) => {
    const idUserMongoDb = await userDAO.findIdUser(id);
    return idUserMongoDb
}

module.exports = { createUserService, loginUserService, getUserByIdService }