const getSessionLogin = (req, res) => {
    //Si al conectarse la sesión ya existe, entonces aumentar el contador
    if (req.session.counter) {
        req.session.counter++;
        res.send(`Se ha visitado el sitio ${req.session.counter} veces.`)
    }
    else {
    //Si no hay aún una sesión para el usuario, entonces inicializar en 1
        req.session.counter = 1;
        res.send("Bienvenido!!!")
    } 
    
}


const getSessionLogout = (req, res) => {
    req.session.destroy(err => {
        if (!err) res.send('Logout ok!')
        else res.send({ status: 'Logout ERROR', body: err })
    })
}



export { getSessionLogout, getSessionLogin }