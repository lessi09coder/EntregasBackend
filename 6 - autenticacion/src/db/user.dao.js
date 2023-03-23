const mongoose = require("mongoose");
const dbCollecion = "sessionsBase" ;
mongoose.connect(`mongodb+srv://lessin09:test123@backend.5bixtxm.mongodb.net/${dbCollecion}?retryWrites=true&w=majority`, error => {
    if (error) {
        console.log('Cannot connect to db')
        process.exit()
    }
});
class UserMongoDbDAO {
    constructor(collection, schema) {
        this.userCollection = mongoose.model(collection, schema);
    }
    async getUserByUsername(username) {
        const user = await this.userCollection.findOne({ username: username }).lean();
        return user;
    }
    async createUser(user) {
        const newUser = await this.userCollection.create({
            ...user            
        });
        return newUser;
    }
    async findUser(user) {
        let existUser = await this.userCollection.findOne({ username: user.username });
        if (!existUser) return { Error: "Usuario inexistente" };
        return existUser;
    }
}

module.exports = UserMongoDbDAO;