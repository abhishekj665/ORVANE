const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const Service = require("./models/service.js");
const Portfolio = require("./models/portfolio.js");

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

app.listen(8080, () => {
    console.log("Listening Successfuly");
})

app.get("/orvane", async (req, res) => {
    let allServices = await Service.find({});
    let allPortfolio = await Portfolio.find({});
    res.render("pages/home.ejs", {allServices, allPortfolio});
})

app.get("/about/who-we-are", (req, res) => {
  res.render("abouts/who-we-are.ejs");
});

app.get("/about/our-process", (req, res) => {
  res.render("abouts/process.ejs");
})