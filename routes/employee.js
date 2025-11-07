const express = require("express");
const router = express.Router({mergeParams : true});

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

const {isLoggedIn} = require("../middlewares");

const Employee = require("../models/employee");


router.get("/",isLoggedIn,wrapAsync(async(req, res) => {
    let allEmployee = await Employee.find({});
    res.render("employees/employee.ejs",{allEmployee});
}))

router.get("/:id", async(req,res) => {
    let {id} = req.params;
    let employee = await Employee.findById(id);
    res.render("employees/detail.ejs",{employee});
})

module.exports = router;