const mongoose = require("mongoose");
const dbCollecion = "sessionsBase" ;
const MONGODB = process.env.MONGODB;
mongoose.connect(MONGODB, error => {
    if (error) {
        console.log('Cannot connect to db')
        process.exit()
    }
});
class UserMongoDbDAO {
    constructor(collection, schema) {
        this.userCollection = mongoose.model(collection, schema);
    }
    
    async createNewUser(user) {
        const newUser = await this.userCollection.create({
            ...user            
        });
        return newUser;
    }
    async findUser(user) {
        let existUser = await this.userCollection.findOne({ user: user.username });
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

module.exports = UserMongoDbDAO;