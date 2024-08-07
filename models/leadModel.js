const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  email : {
    type : String,
    required: true,
    unique: true
  },
  name : {
    type : String,
    required : true
  },
  number: {
    type:Number,
    required:true
  },
},{timestamps : true})


const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;

