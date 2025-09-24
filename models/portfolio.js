const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    role : {
        type : String,
        require : true
    },
    bio : {
        type : String,
        require : true
    },
    social_links : {
        linked_in : {
            type : String,
        },
        twitter : {
            type : String
        },
        git_hub : {
            type : String
        }
    },
    profile : {
            type : String,
            require : true
    }
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema );

module.exports = Portfolio;