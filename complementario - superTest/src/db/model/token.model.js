const mongoose = require("mongoose");
const { createHash } = require("../../utils/hashPass.js");

const tokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
});
tokenSchema.pre("save", function (next) {
    const tokenReset = this;
    tokenReset.token = createHash(this.token);
    next();
});
const TokenReset = mongoose.model('token', tokenSchema);
module.exports = TokenReset;