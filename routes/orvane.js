
const express = require("express");
const router = express.Router();
const Portfolio = require("../models/portfolio");

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const portfolio = require("../models/portfolio");





router.get("/terms", (req, res) => {
  res.render("termsandprivacy/term.ejs");
})

router.get("/privacy", (req, res) => {
  res.render("termsandprivacy/privacy.ejs");
})



router.get("/contact", (req, res) => {
  res.render("contact.ejs");
})

router.get("/services", (req, res) => {
  res.render("services/service.ejs");
})

router.get("/portfolio",async(req, res) => {
  let Portfolios = await Portfolio.find({});
  res.render("pages/portfolio.ejs", {Portfolios});
})

router.get("/portfolio/:id", async(req, res) => {
  let {id} = req.params;
  let portfolio = await Portfolio.findById(id);
  res.render("pages/project.ejs", {portfolio});
})
module.exports = router;