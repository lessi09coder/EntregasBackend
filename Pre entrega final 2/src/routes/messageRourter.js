import {Router} from "express";
//import controllers
const messageRouter = Router()

messageRouter.get('/', (req,res)=>{
    //res.send("hola soy messages")
    res.render('messagesHBS' ,{title: "chat", })
});


export default messageRouter