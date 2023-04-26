const mongoose = require("mongoose");

//const dbCollecion = "sessionsBase" ;
const MONGODB = process.env.MONGODB;
mongoose.connect(MONGODB, error => {
    if (error) {
        console.log('Cannot connect to db')
        process.exit()
    }
});


class TicketMongoDbDAO {
    constructor(collection, schema) {
        this.ticketCollection = mongoose.model(collection, schema);
    }
    
    async createNewTicket(product) {

        const NewTicket = await this.ticketCollection.create({
            
        });
        return NewTicket;
    }
    
    async findTicket(ticketId) {
        //falta probar
        let existTicket = await this.ticketCollection.findOne({ ticket: ticketId._id });
        console.log(existTicket)
        if (!existTicket) return { Error: "No existe ticket!" };
        return existTicket;
    }    
}

module.exports = TicketMongoDbDAO;