
const express = require("express");
const router = express.Router();
const Portfolio = require("../models/portfolio");

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");


const {isLoggedIn} = require("../middlewares");





router.get("/terms", (req, res) => {
  res.render("termsandprivacy/term.ejs");
})

router.get("/privacy", (req, res) => {
  res.render("termsandprivacy/privacy.ejs");
})



router.get("/contact", (req, res) => {
  res.render("contact.ejs");
})

router.get("/services", isLoggedIn, (req, res) => {
  res.render("services/service.ejs");
})


module.exports = router;