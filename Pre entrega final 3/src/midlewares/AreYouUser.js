const { getUserEmailService } = require('../services/userServices.js');

const areYouUser = async (req, res, next) => {
    const user = await getUserEmailService(req.session?.email);
    console.log(user)
    if (user?.rol === "usuario") {
        next();
    } else {
        res.send({ "mesagge" : "no estas registrado" });
    }
};

module.exports = areYouUser;