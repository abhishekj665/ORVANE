const Portfolio = require("../models/portfolio.js");
const portfolioData = require("../init/portfoliodata.js");
const mongoose = require("mongoose");

const db_URL = process.env.ATLAS_URL;

main()
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect(db_URL);
}

const initData = async() => {
    await Portfolio.deleteMany({});
    await Portfolio.insertMany(portfolioData);
    console.log("Data was intialized");
}

initData();