const UserModel = require("../model/userModel.js")
const UserDto = require('../DTO/userDto.js')

const mongoose = require("mongoose");

const MONGODB = process.env.MONGODB;
mongoose.connect(MONGODB, error => {
    if (error) {
        console.log('Cannot connect to db')
        process.exit()
    }
});

const convertDataToObj = (data) => {
    const { _id, user, email, idCart, password, rol } = data;
    let userDto = new UserDto(_id, user, email, idCart, password, rol);
    return userDto
}

class UserDAO {
    async getUserEmail(email) {
        const user = await UserModel.findOne({ email: email }).lean();
        //console.log(`este es el user de UserDao: ${user}`)
        //return user

        return convertDataToObj(user)
    }

    async createUser(user, cid) {
        const newUser = await UserModel.create({
            ...user,
            cartId: cid
        });
        return newUser;
    }

    async findUser(user) {
        let existUser = await UserModel.findOne({ user: user });
        //console.log(`este es el user de UserDao: ${existUser}`)
        if (!existUser) return { mesagge: "Usuario inexistente" };
        return convertDataToObj(existUser);
    }
}
module.exports = UserDAO;


/* class UserMongoDbDAO {
    constructor(collection, schema) {
        this.userCollection = mongoose.model(collection, schema);
    }
    
    async createNewUser(user, cid) {
        const newUser = await this.userCollection.create({
            ...user,
            idCart: cid
        });
        return newUser;
    }
    async findUser(user) {
        let existUser = await this.userCollection.findOne({ user: user });
        //console.log(existUser)
        //if (!existUser) return { Error: "No existe usuario!" };
        return existUser;
    }

    async findUserByUsername(nameUser) {
        let existUser = await this.userCollection.findOne({ user: nameUser });
        //console.log(existUser)
        //if (!existUser) return { Error: "No existe usuario!" };
        return existUser;
    }

    async findIdUser(id) {
        let existIdUser = await this.userCollection.findOne({ _id: id });
        //console.log(existIdUser)
        if (!existIdUser) return { Error: "No existe id!" };
        return existIdUser;
    }
}

module.exports = UserMongoDbDAO; */