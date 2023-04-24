const mongoose = require("mongoose");


const ticketSchema = mongoose.Schema({
    //code tiene que autogenerarse
    code: {type: String },
    purcharse_datatime: {type: String},
    amount: {type: Number},
    purcharser:{type: String },
});


module.exports = ticketSchema;