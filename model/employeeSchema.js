const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    "id":{type:Number},
    "registrarId":{type:Number},
    "name":{type:String},
    "age":{type:Number},
    "phone":{type:Number},
    "email":{type:String},
    "address":{type:String},
    "city":{type:String},
    "zipCode":{type:Number}
},{
    collection: "employees"
});


module.exports = mongoose.model("employeeSchema",employeeSchema);