const { getUserByUsernameService } = require('../services/userServices.js');

const areYouAdmin = async (req, res, next) => {
    const user = await getUserByUsernameService(req.session?.user);
    if (user?.rol === "admin") {
        next();
    } else {
        res.send({ "mesagge" : "no es admin" });
    }
};

module.exports = areYouAdmin;