const { createUserService, loginUserService } = require('../services/userServices.js')
const {yesValidPass} = require('../utils/hashPass.js')
const getUser = async (req, res) => {
    res.render("login",{})  
}

const postUserLogin = async (req, res) => {
    try{
        const username = (req.body)        
        const loginUser = await loginUserService(username)
        console.log(`el pass del body es ${req.body.password}`)
        const validatePass = yesValidPass(loginUser , req.body.password)
        console.log(loginUser)
        if(validatePass) {
            req.session.user = loginUser.user;
            req.session.rol = loginUser.rol;

            res.send({status: "Ok"})
        } else {
            res.send({status: "No se pudo hacer el login!"})
        }
         console.log("la session:")
         console.log(req.session)        

    } catch {
        res.status(500).send("hubo un error")
    }       
}

const test = ((req, res) => {    
    console.log("la session que llega:")
    console.log(req.session)    
    
    res.render("loginAccess", {})    
})

const getRegister = (req, res) => {
    res.render("register", {})
}

const getUserRegister = async (req, res) => {
    const { user, password } = req.body;
    console.log(req.body);
    console.log(user, password)

    newUser = req.body;
    //newUser = {user: "hola", password:11}
    await createUserService(newUser)
    //res.render('register',{})
    //res.send('aca te registras!')
}

/* const getSessionLogout = async (req, res) => {
    req.session.destroy(err => {
        if (!err) res.send('Logout ok!')
        else res.send({ status: 'Logout ERROR', body: err })
    })
} */

const getPrivate = (req, res) => {
    res.send('sos admin')
}

//este auth pasarlo a la carpeta middlewares
const auth = (req, res, next) => {
    if (req.session.admin) {
        next()
    } else {
        res.send('no sos admin')
    }
}

module.exports = { postUserLogin, getRegister, getUser, getUserRegister, auth, getPrivate, test }