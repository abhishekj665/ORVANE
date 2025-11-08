if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const Service = require("../models/service.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const flash = require("connect-flash");
const Employee = require("../models/employee.js");
const methodOverride = require("method-override");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const serverless = require("serverless-http");


const db_URL = process.env.ATLAS_URL;

mongoose.connect(db_URL)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));


app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));


const store = MongoStore.create({
  mongoUrl: db_URL,
  crypto: { secret: process.env.SECRET },
  touchAfter: 24 * 3600
});

const sessionOptions = {
  store,
  secret: process.env.SECRET || "fallbacksecret",
  resave: false,
  saveUninitialized: false,
};

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});


app.get("/", (req, res) => {
  res.render("pages/home.ejs");
});


app.use((req, res, next) => next(new ExpressError(404, "Page Not Found")));
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
});


module.exports = app;
module.exports.handler = serverless(app);
