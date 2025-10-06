
const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");





router.get("/terms", (req, res) => {
  res.render("termsandprivacy/term.ejs");
})

router.get("/privacy", (req, res) => {
  res.render("termsandprivacy/privacy.ejs");
})

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
})

router.get("/log-in", (req, res) => {
  res.render("users/login.ejs");
})

router.get("/contact", (req, res) => {
  res.render("contact.ejs");
})

router.get("/services", (req, res) => {
  res.render("services/service.ejs");
})

module.exports = router;