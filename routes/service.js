const express = require("express");
const router = express.Router({mergeParams : true});

const Service = require("../models/service");
const Project = require("../models/project");

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
    try{
        let newProject = new Project(req.body.project);
        newProject.client_name = res.locals.user._id;
        await newProject.save();
        req.flash("success",`Congratulations  ${res.locals.user.username} , Your project request has been submitted. Our manager will reach you soon.`);
        res.redirect("/orvane");
    }catch{
        req.flash("error", "Something went wrong, try again later.")
    }
    
}))

module.exports = router;