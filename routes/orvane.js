
const express = require("express");
const router = express.Router();
const Portfolio = require("../models/portfolio");

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const Service = require("../models/service");
const Employee = require("../models/employee");


const {isLoggedIn} = require("../middlewares");



router.get("/", async (req, res) => {
    let allServices = await Service.find({});
    let allEmployee = await Employee.find({});
    res.render("pages/home.ejs", {allServices, allEmployee});
})

router.get("/terms", (req, res) => {
  res.render("termsandprivacy/term.ejs");
})

router.get("/privacy", (req, res) => {
  res.render("termsandprivacy/privacy.ejs");
})



router.get("/contact", (req, res) => {
  res.render("contact.ejs");
})




module.exports = router;