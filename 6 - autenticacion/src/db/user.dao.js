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
    
    async createNewUser(user) {
        const newUser = await this.userCollection.create({
            ...user            
        });
        return newUser;
    }
    async findUser(user) {
        let existUser = await this.userCollection.findOne({ user: user.username });
        //console.log(existUser)
        if (!existUser) return { Error: "No existe usuario!" };
        return existUser;
    }
}

module.exports = UserMongoDbDAO;