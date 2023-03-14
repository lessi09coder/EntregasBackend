import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import cookiesRouter from "./routes/cookiesRouter.js"
import sesionsRouter from "./routes/sessionsRouter.js";
const app = express();

//MIDDLEWARES con app.use()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser("secretcode"));

app.use(session({
    secret: 'lessinCoder',
    resave: true,
    saveUninitialized: true,   
}))

app.use('/api/setCookie', cookiesRouter);
app.use('/api/session', sesionsRouter  );

app.get('/api/session/login'), (req, res) => {
    const {username, password } = req.body;
    if(username !== "alexis" || password !== "test123") {
        return res.send('login failed')
    }
    req.session.user = username;
    req.session.admin = true;
    res.send('login success')
}

const PORT = process.env.PORT || 8080;

const httpServer = app.listen( PORT, () => {
    console.log(`Server running on port: ${httpServer.address().port}`)
});
httpServer.on('error', error => console.log(error));


//cookies, sessions & storages 




