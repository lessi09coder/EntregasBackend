const { getUserEmailService } = require('../services/userServices.js');

const areYouAdmin = async (req, res, next) => {
    const user = await getUserEmailService(req.session?.email);
    //console.log(user)
    if (user?.rol === "admin") {
        next();
    } else {
        res.send({ "mesagge" : "no es admin" });
    }
};

module.exports = areYouAdmin;