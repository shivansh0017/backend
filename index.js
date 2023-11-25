const express = require("express");
const mongoose = require("mongoose");
const employeeRoute = require("../backend/controller/employeeRoute");
const cors= require("cors");
const bodyParser= require("body-parser");


mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://shivansh7623:98765@cluster0.j95mosn.mongodb.net/codenestdb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred while connecting with DB"));


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/employees",employeeRoute);


app.listen(4000,()=>{
    console.log("Server started at 4000");
})
