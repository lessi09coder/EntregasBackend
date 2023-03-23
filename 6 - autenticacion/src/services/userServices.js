const UserMongoDbDAO = require('../db/user.dao.js')
const userSchema = require('../db/model/userModel.js')
const userDAO = new UserMongoDbDAO('users', userSchema)

const createUserService = async (user) => {    
    const newUs = await userDAO.createUser(user)
    return newUs
}
const getUserByUsernameService = async (username) => {
    const user = await userDAO.getUserByUsername(username);
    return user;
};
const loginUserService = async (user) => {
    const userInDB = await userDAO.findUser(user);
    return userInDB;
};

module.exports = { createUserService, getUserByUsernameService, loginUserService }