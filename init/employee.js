const mongoose = require("mongoose");
const Employee = require("../models/employee.js");
const { employeeData } = require("./employeedata.js");

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/orvane');
    console.log("Connected to DB");

    
    await Employee.deleteMany({});

    
    await Employee.insertMany(employeeData);
    console.log("Employee data initialized successfully");

   
    mongoose.connection.close();
  } catch (err) {
    console.error("Error initializing data:", err);
  }
}

main();
