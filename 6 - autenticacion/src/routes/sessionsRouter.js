const { Router } = require('express');
const sesionsRouter = Router();

const {
     postUserLogin, getRegister, getUser, getUserRegister,test, auth, getPrivate
} = require("../controllers/sessionsControllers.js")


//si usamos el sessionsRouter.use(auth), todos los endpoints pediran que tengamos autorizacion
sesionsRouter.get('/user', getUser);
sesionsRouter.post('/userPost', postUserLogin);

sesionsRouter.get('/test', test);

sesionsRouter.get('/register', getRegister);
sesionsRouter.post('/register', getUserRegister); //localhost:8080/api/session/register

//sesionsRouter.get('/logout', getSessionLogout)
//sesionsRouter.get('/admin', auth, getPrivate)
module.exports = sesionsRouter;