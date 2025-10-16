const mongoose = require("mongoose");
const Employee = require("../models/employee.js");
const {employeeData} = require("./employeedata.js")

main()
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/orvane');
}


const data  = async() => {
    await Employee.deleteMany({});
    await Employee.insertMany(employeeData);
    console.log("Data was intialized");
}

data();