import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, require: true},
    lastname: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}
});

export default userSchema;