const bcrypt = require("bcrypt");
const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const yesValidPass = (user, password) => {
    return bcrypt.compareSync(password, user.password);
};

const isValidToken = (tokenReset, token )=> {
    return bcrypt.compareSync(token, tokenReset.token);
}

module.exports = { createHash, yesValidPass, isValidToken };