import mongoose from "mongoose";

mongoose.connect('mongodb+srv://lessin09:test123@backend.5bixtxm.mongodb.net/Coder?retryWrites=true&w=majority' , error => {
    if(error){
        console.log('Cannot connect to db')
        process.exit()
    }
});

class ContendedorMongoDb {
 
    constructor(collection, schema){
        console.log(collection)
        this.userCollection = mongoose.model(collection, schema);        
    }

    async getUsers(){
        try {
            let users = await this.userCollection.find()
            console.log(users)
            return users
        } catch (error){
            console.log(error)
        }
    }

    saveUser(user){
        try {
            let result = this.userCollection.create(user)
            return result
        } catch (error){
            console.log(error)
        }
    }
};


export default ContendedorMongoDb;