const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const Service = require("./models/service.js");
const Portfolio = require("./models/employee.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const flash = require("connect-flash");

const session = require("express-session");

const aboutRouter = require("./routes/about.js");
const orvaneRouter = require("./routes/orvane.js");
const userRouter = require("./routes/user.js");




main()
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/orvane');
}


app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));


app.engine("ejs", ejsMate)
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

const sessionOptions = {
  secret : "musupersecretcode",
  resave : false,
  saveUninitialized : false,
  cookie : {
    expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge : 7 * 24 * 60 * 60 * 1000,
    httpOnly : true,
  }
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



app.get("/orvane", async (req, res) => {
    let allServices = await Service.find({});
    let allPortfolio = await Portfolio.find({});
    res.render("pages/home.ejs", {allServices, allPortfolio});
})


app.use("/about", aboutRouter);
app.use("/orvane",orvaneRouter);
app.use("/orvane",userRouter);


app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
})

app.use((err, req, res, next) => {
  let {statusCode = 500, message = "Something went wrong"} = err;
  res.render("error.ejs",{message});
})

app.listen(8080, () => {
    console.log("Listening Successfuly");
})