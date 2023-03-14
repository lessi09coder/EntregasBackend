


/* const getCookies =  (req, res) => {
    //res.cookie sirve para darle un parametro a la cookie('nomre','value',{objeto con configuraciones de la cookie})
    res.cookie('AppCookie', 'La cookie tiene esta value', {maxAge: 6000000}).send("Cookie")

    
} */
const getCookies = (req, res) => {
    const cookie = req.cookies.email ;
    res.send(cookie)
};

const createCookies =  (req, res) => {
    const email = req.body.userEmail ;
    res.cookie('email', email,).send("Cookie creada correctamente")    
};

const getCookiesSigned =  (req, res) => {
    //res.cookie sirve para darle un parametro a la cookie('nomre','value',{objeto con configuraciones de la cookie})
    res.cookie('SignedCookie', 'Esta firmada', {maxAge: 6000000, signed: true}).send("Cookie")

    
};

const getCookiesJson =  (req, res) => {
    //req.cookies.algo es para levantar el value de la cookie en formato json la propiedad que queremos de algo
    let prop = {
                insegura : req.cookies , 
                firmada : req.signedCookies
                }
    res.send(prop)
}

const getCookiesDelete =  (req, res) => {
    //req.cookies.algo es para levantar el value de la cookie en formato json la propiedad que queremos de algo
    res.clearCookie('AppCookie').send("Borramos la cookie")
}

export {getCookies,createCookies, getCookiesSigned, getCookiesJson, getCookiesDelete}