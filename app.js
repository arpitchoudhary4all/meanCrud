const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const route = require("./router/route");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/",route);



app.listen(1234,()=>{
    console.log("server running!!");
})