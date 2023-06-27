const { Router } = require('express');
const userRouter = Router();
const passport = require('passport');

const {
     postUserLogin,
     getRegister,
     getUser,
     getUserRegister,
     getSessionLogout,
     formForgotPassword,
     forgotPassword,
     formResetPassword,
     resetPassword,
     deleteUser
} = require("../controllers/sessionsControllers.js")

//const { } = require('')

//si usamos el sessionsRouter.use(auth), todos los endpoints pediran que tengamos autorizacion
userRouter.get('/user', getUser);
userRouter.post('/userPost', postUserLogin);

userRouter.get('/github', passport.authenticate("github", { scope: ["user:email"] }), async (req, res) => { });
userRouter.get('/githubcallback', passport.authenticate("github", {
     failureRedirect: "api/session/login/user"
}),
     async function (req, res) {
          //traemos dentro de user , el user que es la cuenta de github y lo ubicamos en sessions.user .email..
          req.session.user = req.user.user;
          req.session.email = req.user.email
          req.session.rol = req.user.rol;
          req.session.idCart = req.user.idCart

          res.redirect("/api/products");
     }
);

userRouter.get('/register', getRegister);
userRouter.post('/register', getUserRegister); //localhost:8080/api/session/register

userRouter.post('/logout', getSessionLogout);

userRouter.get("/forgotPassword", formForgotPassword)
userRouter.post("/forgotPassword", forgotPassword)
userRouter.get("/resetPassword", formResetPassword)
userRouter.post("/resetPassword", resetPassword)
userRouter.delete('/delete/:uid' , deleteUser)

//sesionsRouter.get('/admin', auth, getPrivate)
module.exports = userRouter;