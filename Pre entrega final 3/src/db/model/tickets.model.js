const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
    //code tiene que autogenerarse
    code: {type: String },
    purcharse_datatime: {type: Date},
    amount: {type: Number},
    purcharser:{type: String },
});

module.exports = ticketSchema;