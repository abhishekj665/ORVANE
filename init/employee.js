const mongoose = require("mongoose");
const Portfolio = require("../models/employee.js");
const {employeeData} = require("./employeedata.js")

main()
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/orvane');
}


const data  = async() => {
    await Portfolio.deleteMany({});
    await Portfolio.insertMany(employeeData);
    console.log("Data was intialized");
}

data();