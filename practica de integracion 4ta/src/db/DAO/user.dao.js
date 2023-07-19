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
    //console.log("la data es:",data)
    if (data === null) {
        return { mesagge: "no hay un usuario conectado" }
    }
    const { _id, user, email, idCart, password, rol } = data;
    let userDto = new UserDto(_id, user, email, idCart, password, rol);
    return userDto
}

class UserDAO {
    async getUserEmail(email) {
        const user = await UserModel.findOne({ email: email });
        //console.log(`!!este es el user de UserDao getUserEmail: ${user}`)
        //return user

        return convertDataToObj(user)
    }

    async getUserEmailPassport(email) {
        const user = await UserModel.findOne({ email: email }).lean();
        return user
    }

    async createUser(user, cid) {        
        const newUser = await UserModel.create({
            ...user,
            idCart: cid
        })        
        return convertDataToObj(newUser);
    }

    async findUser(user) {
        let existUser = await UserModel.findOne({ user: user });       
        if (!existUser) return { mesagge: "Usuario inexistente" };
        return convertDataToObj(existUser);
    }

    async getUserId(id) {
        const user = await UserModel.findOne({ _id: id }).lean();
        return convertDataToObj(user)
    }

    async updatePasswordRepo(idUser, newPassword) {
        const updatePassword = await UserModel.findByIdAndUpdate({ _id: idUser }, { password: newPassword }, { new: true })
        try {
            if (updatePassword == null) {
                return { error: "No se pudo actualizar la contraseña" }
            }
            return { message: `La contraseña se actualizo` }

        } catch (error) {
            return { error: error.message }
        }
    }

    async deleteUser(uid) {
        const deleteUser = await UserModel.deleteOne({ _id: uid })
        return convertDataToObj(deleteUser)
    }

    async updateDocument(uid, documentStatus) {
        try {
            const user = await UserModel.findOne({ _id: uid });
            if (user) {
                const duplicateDocuments = [];
                const documentsToAdd = documentStatus.map((doc) => ({
                    name: doc.name,
                    reference: doc.reference,
                }));

                documentsToAdd.forEach(newDoc => {
                    const alreadyExists = user.documents.some(
                        existingDoc => existingDoc.name === newDoc.name
                    );

                    if (!alreadyExists) {
                        user.documents.push(newDoc);
                    }
                    else {
                        duplicateDocuments.push(newDoc.name);
                    }
                });
                await user.save();
                return { user: convertDataToObj(user), duplicateDocuments };
            } else {
                throw new Error('Usuario Inexistente');
            }
        } catch (error) {
            return { error: error.message };
        }
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