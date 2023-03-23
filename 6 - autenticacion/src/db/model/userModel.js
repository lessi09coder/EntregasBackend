const mongoose = require("mongoose");
//const { createHash } = require("./");

const userSchema = mongoose.Schema({
    user: { type: String, unique: true, required: true },

    password: { type: String, required: true },

    rol: { type: String, default: "usuario" },

});

//luego usar Hash en password
/* 
userSchema.pre("save", function (next) {
    const user = this;
    console.log(this)
    if (user.email === "adminCoder@coder.com" &&
        user.password === "adminCod3r123") {
        user.rol = "admin";
    }
    user.password = createHash(this.password);
    next();
}); */
module.exports = userSchema