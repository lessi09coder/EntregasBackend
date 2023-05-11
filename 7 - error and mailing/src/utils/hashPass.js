const bcrypt = require("bcrypt");
const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const yesValidPass = (user, password) => {
    return bcrypt.compareSync(password, user.password);
};

module.exports = { createHash, yesValidPass };