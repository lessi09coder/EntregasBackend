import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {type: String, require: true},
    /* lastname: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true} */
});

export default productSchema;