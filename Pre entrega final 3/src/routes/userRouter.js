const { Router } = require('express');
const userRouter = Router();
const passport = require('passport');

const {
     postUserLogin, getRegister, getUser, getUserRegister,test, auth, getPrivate, getSessionLogout
} = require("../controllers/sessionsControllers.js")


//si usamos el sessionsRouter.use(auth), todos los endpoints pediran que tengamos autorizacion
userRouter.get('/user', getUser);
userRouter.post('/userPost', postUserLogin);
userRouter.get('/github', passport.authenticate("github", {scope: ["user:email"]}) , async(req, res) => {});
userRouter.get('/githubcallback', passport.authenticate("github",{
     failureRedirect: "api/session/login/user"}),
     async function (req , res) {
          //traemos dentro de user , el user que es la cuenta de github y lo ubicamos en sessions.user
          req.session.user = req.user.user;
         
          res.redirect("/api/products");       
     }
);


userRouter.get('/test', test);

userRouter.get('/register', getRegister);
userRouter.post('/register', getUserRegister); //localhost:8080/api/session/register

userRouter.post('/logout', getSessionLogout);
//sesionsRouter.get('/admin', auth, getPrivate)
module.exports = userRouter;