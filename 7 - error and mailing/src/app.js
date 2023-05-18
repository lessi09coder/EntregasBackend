const express = require('express');
require('dotenv').config();
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
//const cookieParser = require("cookie-parser");
const handlebars = require('express-handlebars');
const { Server } = require('socket.io');
const { initPassport } = require('./config/passport.js');
const passport = require('passport');
const { SECRETSESSION, MONGODB, PORT } = require('./config/config.js');
const errorHandler = require('./midlewares/errors/index.js');
//const authRouter = require('./src/routes/auth');
const addLogger = require('./utils/logger.js');

initPassport();
app.use(passport.initialize());

const userRouter = require('./routes/userRouter.js');
const productsRouter = require('./routes/productsRouter.js');
const cartsRouter = require('./routes/cartsRouter.js');
const messageRouter = require('./routes/messageRourter.js');
const mockingproductsRouter = require('./routes/mockingproductsRouter.js')
const errorsRouter = require('./routes/errorsRouter.js')
//loggin y Register de usuarios:



//const MONGODB = process.env.MONGODB
const mongoStore = MongoStore.create({
    mongoUrl: MONGODB,
    mongoOptions: { useUnifiedTopology: true },
    ttl: 500
});

//const SECRETSESSION = process.env.SECRETSESSION
app.use(session({
    store: mongoStore,
    secret: SECRETSESSION,
    resave: false,
    saveUninitialized: false
}));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/recursos', express.static(__dirname + '/public'));

//app.use(cookieParser("secretoelcode"))


app.use('/api/session', userRouter); //localhost:8080/api/session
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/messages', messageRouter)
app.use('/api/mockingproducts', mockingproductsRouter)
app.use('/api/errors', errorsRouter)



initPassport();
app.use(passport.initialize());
app.use(addLogger)


app.get('/', (req, res) => {
    res.redirect("api/session/user")
});


app.get('/logger', (req, res) => {
    req.logger.debug('Este es verbose')
    req.logger.info('Ingreso en la ruta raiz')
    req.logger.warning('Este es un warn')
    res.send({ message: "Prueba de logger" })
});

//const PORT = process.env.PORT || 8080;

const httpServer = app.listen(PORT, () => {
    console.log(`Server running on port: ${httpServer.address().port}`)
});
httpServer.on('error', error => console.log(error));

let messagesList = [];
const io = new Server(httpServer);


io.on('connection', socket => {
    console.log('Nuevo cliente conectado')

    io.sockets.emit('messages', messagesList)
    //sockets.emit('messages', messagesList)  

    socket.on('newUserLoged', user => {
        io.sockets.emit('newUser', user)
    })

    socket.on('message', data => {
        messagesList.push(data)
        io.sockets.emit('messages', messagesList) // esto es para pasarle a los demas clientes conectados
    })
})


app.use(errorHandler)