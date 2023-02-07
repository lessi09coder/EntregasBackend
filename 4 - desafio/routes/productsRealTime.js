const { Router } = require('express');
const productsRealTime = Router();

productsRealTime.get('/', (req,res)=>{
    res.render('realtimeProducts')
})

productsRealTime.post("/", async (req, res) => {
    require('../src/app')
    //require("./../src/app").emitProducts(req.body);
    res.end();
  });
  
productsRealTime.delete("/:id", async (req, res) => {
    require("./../src/app").emitDeleteProduct(req.params.id);
    res.end();
  });
module.exports = productsRealTime