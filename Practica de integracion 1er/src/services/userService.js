import ContendedorMongoDb from "../db/user.dao.js"
//import { userSchema } from "../db/models/user.model.js"
//const userSchema = require('../db/models/user.model.js')
import userSchema from "../db/models/user.model.js"

//en la clase ContendedorMongoDb tenemos la colleccion y al lado el esquema indicado
const userDAO = new ContendedorMongoDb('usuarios', userSchema)

const getUsersService = async () => {
    let users = await userDAO.getUsers()
    //console.log(users)
    return users
}

const createUserService =  (user) => {
     let response =  userDAO.saveUser(user)
     return response
}

export { getUsersService, createUserService };