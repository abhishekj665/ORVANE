if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}
console.log(process.env.ATLAS_URL);


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const Service = require("./models/service.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const flash = require("connect-flash");
const Employee = require("./models/employee.js");
const methodOverride = require("method-override");

const session = require("express-session");
const MongoStore = require("connect-mongo");

const aboutRouter = require("./routes/about.js");
const orvaneRouter = require("./routes/orvane.js");
const userRouter = require("./routes/user.js");
const portfolioRouter = require("./routes/portfolio.js");
const employeeRouter = require("./routes/employee.js");
const serviceRouter = require("./routes/service.js");


const db_URL = process.env.ATLAS_URL;



main()
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect(db_URL);
}





app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride(function (req, res) {
  if (req.query && typeof req.query._method === 'string') {
    return req.query._method;
  }
}));


app.engine("ejs", ejsMate)
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

const store = MongoStore.create({
  mongoUrl : db_URL,
  crypto : {
    secret : process.env.SECRET
  },
  touchAfter : 24 * 3600
})

store.on("error", () => {
  console.log("Error in Mongo Session Store", err)
})

const sessionOptions = {
  store,
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

app.use("/about", aboutRouter);
app.use("/orvane",orvaneRouter);
app.use("/user",userRouter);
app.use("/portfolio",portfolioRouter );
app.use("/employee", employeeRouter);
app.use("/service", serviceRouter);

app.get("/", (req, res) => {
  res.render("pages/home.ejs");
})







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