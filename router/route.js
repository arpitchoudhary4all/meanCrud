const express = require("express");
const logger = require("../logger");

const route = express.Router();
const path = require("path");
const crud = require("../db/crud");




route.post("/additem",(req,res)=>{
    logger.debug('Add start');
    var product = req.body;
   crud.addProduct(product,res);
   logger.debug('Add end.');
   logger.error('add error')
});

route.get("/getitem",(req,res)=>{
    crud.findProduct(res);
});

route.get("/deleteitem",(req,res)=>{
    logger.debug('Delete.');
    crud.findProductToDelete(res);
});
route.get("/markforedit/:id",(req,res)=>{
    // console.log("hey " + req.params.id)
    var id = req.params.id;
    // res.send(id);
    crud.markforEdit(id,res);
});
route.get("/markfordelete/:id",(req,res)=>{
    // console.log("hey " + req.params.id)
    var id = req.params.id;
    // res.send(id);
    crud.markforDelete(id,res);
});
route.post("/update",(req,res)=>{
    var product = req.body;
    // console.log(product);
   crud.updateProduct(product,res);
});


module.exports = route;