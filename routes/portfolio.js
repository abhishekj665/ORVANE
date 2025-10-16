const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

const {isLoggedIn} = require("../middlewares");

const Portfolio = require("../models/portfolio");




router.get("/:id", isLoggedIn, wrapAsync(async(req, res) => {
  let {id} = req.params;
  let portfolio = await Portfolio.findById(id);
  res.render("portfolio/project.ejs", {portfolio});
}))



router.get("/",isLoggedIn, async(req, res) => {
  let Portfolios = await Portfolio.find({});
  res.render("portfolio/portfolio.ejs", {Portfolios});
});

module.exports = router;