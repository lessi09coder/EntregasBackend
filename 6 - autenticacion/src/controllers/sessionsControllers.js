const { createUserService, loginUserService } = require('../services/userServices.js')

const getUser = async (req, res) => {

    res.render("login",{})
   /* 
    console.log("la session que llega:")
    console.log(req.session)
    
    res.render("loginAccess", {})
    */
   
    
}


const postUserLogin = async (req, res) => {


    try{
        const username = (req.body)
        //console.log(`el body trae ${username.username}`)
         const loginUser = await loginUserService(username)
         console.log(loginUser)

         req.session.user = loginUser.user;
         req.session.rol = loginUser.rol;
        

     
         console.log("la session:")
         console.log(req.session)
         
         res.send("todo ok")

    }catch {
        res.status(500).send("hubo un error")
    }
    

    //console.log(` el user devuelto es ${loginUser} `) //anda bien
    

    //req.session = { user: loginUser.user, rol: loginUser.rol };
    /*  */
    
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