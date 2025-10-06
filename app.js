const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const Service = require("./models/service.js");
const Portfolio = require("./models/portfolio.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

const aboutRouter = require("./routes/about.js");
const orvaneRouter = require("./routes/orvane.js");




main()
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/orvane');
}


app.use(express.static(path.join(__dirname,"public")));


app.engine("ejs", ejsMate)
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));



app.get("/orvane", async (req, res) => {
    let allServices = await Service.find({});
    let allPortfolio = await Portfolio.find({});
    res.render("pages/home.ejs", {allServices, allPortfolio});
})


app.use("/about", aboutRouter);
app.use("/orvane",orvaneRouter);


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