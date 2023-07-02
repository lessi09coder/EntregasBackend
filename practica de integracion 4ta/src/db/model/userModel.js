const mongoose = require("mongoose");
const { createHash } = require("../../utils/hashPass.js");

const userSchema = mongoose.Schema({
    user: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    idCart: { type: String, require: true },
    password: { type: String },
    rol: { type: String, default: "usuario" },
    documents: [{ name: String, reference: String }],
    last_connection: { type: Date, default: Date.now }
});

userSchema.pre("save", function (next) {
    const user = this;
    if (user.email === process.env.EMAILADMINCODER &&
        user.password === process.env.PASSWORDADMINGCODER) {
        user.rol = "admin"
    }
    user.password = createHash(this.password);
    next();
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel