const UserRepository = require ('../db/repository/userRepo.js');
const userRepo = new UserRepository();
const { createCartService } = require('../services/cartsService.js')

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
