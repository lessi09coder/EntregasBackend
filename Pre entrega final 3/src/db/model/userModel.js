const mongoose = require("mongoose");
const { createHash } = require("../../utils/hashPass.js");

const userSchema = mongoose.Schema({
    user: { type: String, unique: true, required: true },
    idCart: {type: String},
    password: { type: String},
    rol: { type: String, default: "usuario" },
});

userSchema.pre("save", function (next) {
    const user = this;
    console.log(this)
    if (user.email === "adminCoder@coder.com" &&
        user.password === "adminCod3r123") {
        user.rol = "admin";
    }
    user.password = createHash(this.password);
    next();
}); 
module.exports = userSchema