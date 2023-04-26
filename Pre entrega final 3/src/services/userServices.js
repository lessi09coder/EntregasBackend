const UserRepository = require ('../db/repository/userRepo.js');
const userRepo = new UserRepository();
const { createCartService } = require('../services/cartsService.js')

//const UserMongoDbDAO = require('../db/DAO/user.dao.js')
//const userSchema = require('../db/model/userModel.js')
//const { createCartService } = require('../services/cartsService.js')
//const userDAO = new UserMongoDbDAO('users', userSchema)

const createUserService = async (user) => {    
    const newCart = await createCartService();
    const newUs = await userRepo.createUserRepo(user, newCart._id )
    return newUs
};

const loginUserService = async (user) => {
    const userMongoDb = await userRepo.findUserRepo(user);
    return userMongoDb;
};

const getUserEmailService = async (userEmail) => {
    const username = await userRepo.getUserByEmailRepo(userEmail)
    return username
};

module.exports = { createUserService, loginUserService, getUserEmailService };

/* const createUserService = async (user) => {    
    const newCart = await createCartService();
    const newUs = await userDAO.createNewUser(user, newCart._id )
    return newUs
};

const loginUserService = async (user) => {
    const userMongoDb = await userDAO.findUser(user);
    return userMongoDb;
};

const getUserByIdService = async (id) => {
    const idUserMongoDb = await userDAO.findIdUser(id);
    return idUserMongoDb
};

const getUserByUsernameService = async (nameUser) => {
    const username = await userDAO.findUserByUsername(nameUser)
    return username
}; */

//module.exports = { createUserService, loginUserService, getUserByIdService , getUserByUsernameService };