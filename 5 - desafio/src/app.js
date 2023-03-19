import express from "express";
import session from "express-session";
//import FileStore  from "session-file-store";   ** para usar archivos locales con fileStore
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import cookiesRouter from "./routes/cookiesRouter.js"
import sesionsRouter from "./routes/sessionsRouter.js";
//usar __dirname con module ES :
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('../', import.meta.url));

const app = express();

//MIDDLEWARES con app.use()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/recursos', express.static(__dirname + '/public'));
app.use(cookieParser("secretcode"));


// const fileStore =  FileStore(session)   ** para usar archivos locales con fileStore

const mongoStore = MongoStore.create({
    mongoUrl : 'mongodb+srv://lessin09:test123@backend.5bixtxm.mongodb.net/sessionsBase?retryWrites=true&w=majority' ,
    mongoOptions: {useNewUrlParser: true , useUnifiedTopology: true},
    ttl:15
})
app.use(session({
    //store: new fileStore({path: './sessions', ttl:60, retries:0}),
    store: mongoStore,
    secret: 'lessinCoder',
    resave: false,
    saveUninitialized: false,
})) 

app.use('/api/setCookie', cookiesRouter);
app.use('/api/session', sesionsRouter);

const PORT = process.env.PORT || 8080;

const httpServer = app.listen(PORT, () => {
    console.log(`Server running on port: ${httpServer.address().port}`)
});
httpServer.on('error', error => console.log(error));


//cookies, sessions & storages II 55:01