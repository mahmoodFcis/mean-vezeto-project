const express=require("express");
var router = express.Router();
const config=require("config");



var app=express();
app.use(express.json());
require("./config/routeConfig")(app);

app.get('/',function(req,res){res.send("home page")},(e)=>{console.log(e)});


const mongoose=require("mongoose");

mongoose.connect(config.get("databaseURL"))
.then(()=>{console.log("connected to mongodb");})
.catch(e=>console.log("an error occurred during connection to mongo",e));

var server=app.listen(process.env.PORT|| config.get("PORT")|| 3000,()=>{console.log(`is listening to port ${config.get("PORT")} `)});


module.exports=server;
console.log(process.env.PORT);

console.log(app.get("env"));

console.log(config.get("PORT"));

console.log("vezetoo");