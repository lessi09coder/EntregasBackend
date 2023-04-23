const { Router } = require('express');
const sesionsRouter = Router();
const passport = require('passport');

const {
     postUserLogin, getRegister, getUser, getUserRegister,test, auth, getPrivate, getSessionLogout
} = require("../controllers/sessionsControllers.js")


//si usamos el sessionsRouter.use(auth), todos los endpoints pediran que tengamos autorizacion
sesionsRouter.get('/user', getUser);
sesionsRouter.post('/userPost', postUserLogin);
sesionsRouter.get('/github', passport.authenticate("github", {scope: ["user:email"]}) , async(req, res) => {});
sesionsRouter.get('/githubcallback', passport.authenticate("github",{
     failureRedirect: "api/session/login/user"}),
     async function (req , res) {
          //traemos dentro de user , el user que es la cuenta de github y lo ubicamos en sessions.user
          req.session.user = req.user.user;
         
          res.redirect("/api/products");       
     }
);


sesionsRouter.get('/test', test);

sesionsRouter.get('/register', getRegister);
sesionsRouter.post('/register', getUserRegister); //localhost:8080/api/session/register

sesionsRouter.post('/logout', getSessionLogout);
//sesionsRouter.get('/admin', auth, getPrivate)
module.exports = sesionsRouter;