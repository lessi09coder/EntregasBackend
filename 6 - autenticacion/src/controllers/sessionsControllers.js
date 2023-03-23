const { createUserService, getUserByUsernameService, loginUserService } = require('../services/userServices.js')

const getUserLogin = (req, res) => {

    //res.render("login",)

    res.render('register',{})


    //esto no, tiene que usar passport!!
    /* const {username, password } = req.body;
    if(username !== "alexis" || password !== "test123") {
        return res.send('login failed')
        ///console.log("login failed")
    }
    req.session.user = username;
    req.session.admin = true;
    res.send('login success')

 */
}

const getUserRegister = (req, res) => {
    const {user, password } = req.body;
    console.log(req.body);
    console.log(user, password )
    //res.render('register',{})
    //res.send('aca te registras!')
}

const getSessionLogout = (req, res) => {
    req.session.destroy(err => {
        if (!err) res.send('Logout ok!')
        else res.send({ status: 'Logout ERROR', body: err })
    })
}

const getPrivate = (req, res) => {
    res.send('sos admin')
}

//este auth pasarlo a la carpeta middlewares
const auth = (req, res , next )=> {
    if(req.session.admin){
        next()
    } else {
        res.send('no sos admin')
    }
}

module.exports =  { getSessionLogout, getUserLogin, getUserRegister, auth , getPrivate}