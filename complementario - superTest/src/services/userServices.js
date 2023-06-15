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

const getUserIdService = async (id) => {
    const username = await userRepo.getUserByIdRepo(id)
    return username
};

const getUserByEmailPassportService = async (email) => {
    const username = await userRepo.getUserByEmailPassportRepo(email)
    return username
}; 

const updatePasswordService = async (idUser , newPassword) => {
    const res = await userRepo.updatePasswordRepo(idUser , newPassword)
    return res
}; 

module.exports = { createUserService, loginUserService, getUserEmailService, getUserIdService, getUserByEmailPassportService, updatePasswordService };
