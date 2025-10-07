const express = require("express");
const router = express.Router({mergeParams : true});

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

router.get("/who-we-are", (req, res) => {
  res.render("abouts/who-we-are.ejs");
});

router.get("/our-process", (req, res) => {
  res.render("abouts/process.ejs");
})

module.exports = router;