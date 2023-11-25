const mongoose = require("mongoose");
const leaveSchema = new mongoose.Schema({
    "id":{type:Number},
    "name":{type:String},
    "leaveType":{type:String}
},{
    collection: "leaves"
});


module.exports = mongoose.model("leaveSchema",leaveSchema);