const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/user");

const projectSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    project_domain : {
        type : String,
        required : true
    },
    project_requirment : {
        type : String,
        required : true
    },
    start_date : {
        type : Date,
        default : Date.now()
    },
    end_date : {
        type : Date,
    },
    price : {
        type : Number,
        default : 2000,
    },
    client : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }

})

module.exports = mongoose.model("Project",projectSchema);