const express = require("express");
const leaveRoute = express.Router();
const leaveSchema = require("../model/leaveSchema");
const mongoose = require("mongoose");


leaveRoute.post("/create-leave",(req,res)=>{
	console.log("Employee created!");
    leaveSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


leaveRoute.get("/",(req,res)=>{
    leaveSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


// studentRoute.get("/update-student/:id",(req,res)=>{})
// studentRoute.put("/update-student/:id",(req,res)=>{})


leaveRoute.route("/update-leave/:id")
.get((req,res)=>{
    leaveSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    leaveSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


leaveRoute.delete("/delete-leave/:id",(req,res)=>{
    leaveSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

//http://localhost:4000/students/update-employee/ and PUT method
module.exports = leaveRoute;