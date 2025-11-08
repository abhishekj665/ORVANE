const mongoose = require("mongoose");
const passport = require("passport");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    fullname : {
        type : String,
        default : ""
    },
    profession : {
        type : String,
        default : ""
        
    },
    resume : {
        type : String
    },
    contact : {
        type : Number,
        default : 0
        
    },
    address : {
        type : String,
        default : ""
    },
    pincode : {
        type : Number,
        default : 0
    }
    
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);