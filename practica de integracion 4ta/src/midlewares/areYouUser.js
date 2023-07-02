const { getUserEmailService } = require('../services/userServices.js');

const areYouUser = async (req, res, next) => {
    const user = await getUserEmailService(req.session?.email);    
    if (user?.rol === "usuario") {
        next();
    } else {
        res.redirect('/api/users/user')
    }
};

module.exports = areYouUser;