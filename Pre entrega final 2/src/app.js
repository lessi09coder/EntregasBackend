import express from "express";
import productsRouter from "./routes/productsRouter.js";
import cartsRouter from "./routes/cartsRouter.js"
import handlebars from 'express-handlebars'
const app = express();

 app.engine('handlebars', handlebars.engine());
app.set('views', './views')
app.set('view engine' , 'handlebars')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products', productsRouter); 
app.use('/api/carts', cartsRouter);  

const PORT = process.env.PORT || 8080 ;

app.get("/", (req, res) =>{
    res.send("Pre entrega N°2")
})

const server = app.listen(PORT , ()=>{
    console.log(`Server running on port: ${server.address().port}`)
});
server.on('error', error => console.log(error));


