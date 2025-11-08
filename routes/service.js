const express = require("express");
const router = express.Router({mergeParams : true});

const Service = require("../models/service");
const Project = require("../models/project");

const Task = require("../models/task");

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

const {isLoggedIn} = require("../middlewares");

router.get("/", isLoggedIn,wrapAsync(async(req , res) => {
    let allService = await Service.find({});
    res.render("services/service.ejs",{allService}); 
}))

router.get("/post-project/:id", isLoggedIn, wrapAsync( async(req, res) => {
    let {id} = req.params;
    let service = await Service.findById(id);
    res.render("services/post_project.ejs",{service});
}))

router.post("/post-project", isLoggedIn, wrapAsync( async(req, res) => {
    console.log("Hello")
    try{
        let newTask = new Task(req.body.task);
        console.log(req.body)
        newTask.client = res.locals.user._id;
        console.log(newTask);
        await newTask.save();
        req.flash("success",`Congratulations  ${res.locals.user.username} , Your project request has been submitted. Our manager will reach you soon.`);
        res.redirect("/orvane");
    }catch{
        req.flash("error", "Something went wrong, try again later.")
    }
    
}))

module.exports = router;