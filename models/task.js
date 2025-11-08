const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const User = require("../models/user");

const taskSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    domain : {
        type : String,
        required : true
    },
    requirments : {
        type : String,
        required : true
    },
    deadline : {
        type : Date,
        required : true
    },
    price : {
        type : Number,
        required : true
    },

    client : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }

})

module.exports = mongoose.model("Task", taskSchema);