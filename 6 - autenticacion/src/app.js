const express = require('express');

const session = require('express-session')
const MongoStore = require('connect-mongo');
//const cookieParser = require("cookie-parser");
const handlebars = require('express-handlebars');
//const authRouter = require('./src/routes/auth');

const sesionsRouter = require('./routes/sessionsRouter.js')
//loggin y Register de usuarios:

const app = express();


const mongoStore = MongoStore.create({
    mongoUrl: 'mongodb+srv://lessin09:test123@backend.5bixtxm.mongodb.net/?retryWrites=true&w=majority',
    mongoOptions: { useUnifiedTopology: true},
    ttl:500
});

app.use(session({
    store: mongoStore,
    secret: 'secreto123',
    resave: false, 
    saveUninitialized: false
}));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/recursos', express.static(__dirname + '/public'));

//app.use(cookieParser("secretoelcode"))

app.use('/api/session', sesionsRouter); //localhost:8080/api/session

app.use('/', (req, res) => {    
    req.session.user = "hola"
    res.redirect("api/session/user")
}); 


const PORT = process.env.PORT || 8080;

const httpServer = app.listen(PORT, () => {
    console.log(`Server running on port: ${httpServer.address().port}`)
});
httpServer.on('error', error => console.log(error));



//seguir creando loggin, register y los user guardados en mongodb


//autorizacion y autenticacion  49:33 hs