const { Router } = require('express');
const sesionsRouter = Router();

const {
    getSessionLogout, getUserLogin, getUserRegister, auth, getPrivate
} = require("../controllers/sessionsControllers.js")


//si usamos el sessionsRouter.use(auth), todos los endpoints pediran que tengamos autorizacion
sesionsRouter.post('/user', getUserLogin)
sesionsRouter.get('/register', getUserRegister) //localhost:8080/api/session/register
sesionsRouter.get('/logout', getSessionLogout)
sesionsRouter.get('/admin', auth, getPrivate)
module.exports = sesionsRouter;