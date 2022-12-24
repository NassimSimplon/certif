const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = mongoose.model('users',new Schema({
    fullName:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number 
    },
    
}));