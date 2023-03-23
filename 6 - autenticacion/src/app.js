const express = require('express');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const handlebars = require('express-handlebars')
//const authRouter = require('./src/routes/auth');

const sesionsRouter = require('./routes/sessionsRouter.js')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/recursos', express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

const mongoStore = MongoStore.create({
    mongoUrl: 'mongodb+srv://lessin09:test123@backend.5bixtxm.mongodb.net/sessionsBase?retryWrites=true&w=majority',
    mongoOptions: { useNewUrlParser: true , useUnifiedTopology: true},
    ttl:150
});

app.use(session({
    store: mongoStore,
    secret: 'secreto123',
    resave: false, 
    saveUninitialized: false
}));


//loggin y Register de usuarios:
app.use('/api/session', sesionsRouter); //localhost:8080/api/session


const PORT = process.env.PORT || 8080;

const httpServer = app.listen(PORT, () => {
    console.log(`Server running on port: ${httpServer.address().port}`)
});
httpServer.on('error', error => console.log(error));

app.use('/', (req, res) => {
    res.render('login')
   //res.send("Hola")
})

//seguir creando loggin, register y los user guardados en mongodb


//autorizacion y autenticacion  49:33 hs