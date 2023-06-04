const { createUserService, loginUserService, getUserEmailService, getUserIdService, updatePasswordService } = require('../services/userServices.js');
const { getTokenByUserIdService, createTokenService, updateTokenService, deleteTokenByIdService } = require('../services/tokenService.js')
const { yesValidPass, isValidToken , createHash} = require('../utils/hashPass.js');
const { tokenRamdon } = require('../utils/TokenPassword.js')
const sendMailToUser = require('../utils/sendEmailUser.js')
const getUser = async (req, res) => {
    res.render("login", {})
};

const postUserLogin = async (req, res) => {
    try {
        //console.log(req.body)
        const username = (req.body.user);
        const loginUser = await loginUserService(username);
        //console.log("que trae el login user:" , loginUser)

        const validatePass = yesValidPass(loginUser, req.body.password);

        if (validatePass) {
            req.session.user = loginUser.user;
            req.session.email = loginUser.email
            req.session.rol = loginUser.rol;
            req.session.idCart = loginUser.idCart
            res.send({ status: "Ok" });

        } else {
            res.send({ status: "No se pudo hacer el login!" })
        }

    } catch {
        res.status(500).send("hubo un error!")
    };
};

//testeo:
const test = (req, res) => {
    console.log("la session que llega:")
    console.log(req.session)

    res.render("loginAccess", {})
};

const getRegister = (req, res) => {
    res.render("register", {});
};

const getUserRegister = async (req, res) => {
    const { user, password } = req.body;
    console.log(req.body);
    //console.log(user, password);

    newUser = req.body;
    //newUser = {user: "hola", password:11}
    await createUserService(newUser);
    //res.render('register',{})
    //res.send('aca te registras!')
};

const getSessionLogout = async (req, res) => {
    req.session.destroy(err => {
        if (!err) res.send('Logout ok!');
        else res.send({ status: 'Logout ERROR', body: err });
    })
};

//acomodar todo esto...
const formForgotPassword = async (req, res) => {
    res.render("forgotPasswordHBS", { title: "Olvido su Password ?" })
}
const forgotPassword = async (req, res, next) => {
    try {
        const user = await getUserEmailService(req.body.email);             
        const token = tokenRamdon();
        const expirationDate = new Date(Date.now() + 60 * 60 * 1000);
        const resetUrl = `${req.protocol}://${req.get('host')}/api/user/resetPassword`
        const tokenReset = await getTokenByUserIdService(user._id);

        if (tokenReset.error) {            
            createTokenService(token, user._id, expirationDate);
        } else {
            tokenReset.token = createHash(token);
            tokenReset.expirationDate = expirationDate;       
            await updateTokenService(tokenReset);
        }
        
        sendMailToUser(token, user.email , resetUrl);
        const currentTime = new Date();
        const timeDifference = expirationDate - currentTime;
        setTimeout(() => {
            deleteTokenByIdService(tokenReset._id)
        }, timeDifference); 
        res.status(201).send({ status: "success", payload: `El token de recuperacion ha sido enviado al email: ${user.email}` })

    } catch (error) {
        next(error)
    }
}
const formResetPassword = async (req, res) => {
    res.render("resetPasswordHBS", { title: "Restaurar Password" })
}
const resetPassword = async (req, res, next) => {
    try {
        const userEmail = await getUserEmailService(req.body.email)
        console.log(userEmail)
        const password = req.body.password
        const newPassword = req.body.repeatPassword
        const tokenReset = await getTokenByUserIdService(userEmail._id);
        console.log(tokenReset)
        const validToken = tokenReset.error ? null : isValidToken(tokenReset, req.body.token)
        if (!validToken) {
            res.status(403).send({ status: "error", payload: "Token Invalido" })
        }
        else {
            const validPassword = yesValidPass(userEmail, password);
            console.log(validPassword)
            if (validPassword) {
                res.status(422).send({ status: "error", payload: "La contraseña no puede ser igual a la anterior" })
            }
            else if (password !== newPassword) {
                res.status(422).send({ status: "error", payload: "Las contraseñas no coinciden" })
            }
            else {
                await updatePasswordService(userEmail._id, createHash(password))
                deleteTokenByIdService(tokenReset._id)
                res.status(200).send({ status: "success", payload: "Contraseña actualizada correctamente" })
            }
        }
    } catch (error) {
        next(error)
    }
}



//este auth pasarlo a la carpeta middlewares
const auth = (req, res, next) => {
    if (req.session.admin) {
        next();
    } else {
        res.send('no sos admin');
    }
};

module.exports = {
    postUserLogin,
    getRegister,
    getUser,
    getUserRegister,
    auth,
    test,
    getSessionLogout,
    formForgotPassword,
    forgotPassword,
    formResetPassword,
    resetPassword
}