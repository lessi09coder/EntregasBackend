const UserMongoDbDAO = require('../db/user.dao.js')
const userSchema = require('../db/model/userModel.js')
const { createCartService } = require('../services/cartsService.js')
const userDAO = new UserMongoDbDAO('users', userSchema)

const createUserService = async (user) => {    
    const newCart = await createCartService();
    const newUs = await userDAO.createNewUser(user, newCart._id )
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

const getUserByUsernameService = async (nameUser) => {
    const username = await userDAO.findUserByUsername(nameUser)
    return username
}

module.exports = { createUserService, loginUserService, getUserByIdService , getUserByUsernameService}