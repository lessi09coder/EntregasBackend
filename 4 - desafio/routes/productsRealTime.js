const { Router } = require('express');
const productsRealTime = Router();

// intentar traer todo con un emit desde app.js

//const socket = io();


/* socket.on("todosLosProductosClientes", (socket) =>{
  console.log(socket)
  
}) */

productsRealTime.get('/', (req,res)=>{
  //console.log(todo)
  res.render('realtimeProducts' , { title: "real"})
})
productsRealTime.post("/", (req, res) => {
  require('../src/app').emitProducs(req.body);
  console.log(req.body)  
  res.end();
});


/* productsRealTime.post("/", async (req, res) => {
    require('../src/app')
    //require("./../src/app").emitProducts(req.body);
    res.end();
  }); */
  
/* productsRealTime.delete("/:id", async (req, res) => {
    require("./../src/app").emitDeleteProduct(req.params.id);
    res.end();
  }); */
  
module.exports = productsRealTime