

const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        reqired : true,
    },

    price_on_plan : {
        type : String,
        default : "Contact us for pricing"
    },

    created_at : {
        type : Date,
        default : Date.now
    }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
