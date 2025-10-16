const express = require("express");
const router = express.Router({mergeParams : true});

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

const {isLoggedIn} = require("../middlewares");

router.get("/who-we-are", (req, res) => {
  res.render("abouts/who-we-are.ejs");
});

router.get("/our-process", (req, res) => {
  res.render("abouts/process.ejs");
})

router.get("/careers", (req, res) => {
  res.render("abouts/career.ejs");
})

module.exports = router;