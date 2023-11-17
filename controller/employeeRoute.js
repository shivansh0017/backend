const express = require("express");
const employeeRoute = express.Router();
const employeeSchema = require("../model/employeeSchema");
const mongoose = require("mongoose");


employeeRoute.post("/create-employee",(req,res)=>{
	console.log("Employee created!");
    employeeSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


employeeRoute.get("/",(req,res)=>{
    employeeSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


// studentRoute.get("/update-student/:id",(req,res)=>{})
// studentRoute.put("/update-student/:id",(req,res)=>{})


employeeRoute.route("/update-employee/:id")
.get((req,res)=>{
    employeeSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    employeeSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


employeeRoute.delete("/delete-employee/:id",(req,res)=>{
    employeeSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

//http://localhost:4000/students/update-employee/ and PUT method
module.exports = employeeRoute;