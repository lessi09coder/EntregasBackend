import express from "express";
import userRouter from "./src/routes/user.js";
import handlebars from 'express-handlebars'
const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', './views')
app.set('view engine' , 'handlebars')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', userRouter);

const PORT = process.env.PORT || 8080 ;
const server = app.listen(PORT , ()=>{
    console.log(`Server running on port: ${server.address().port}`)
});
server.on('error', error => console.log(error));


//1:38