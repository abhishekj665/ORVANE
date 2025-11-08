const mongoose = require("mongoose");
const Employee = require("../models/employee.js");
const { employeeData } = require("./employeedata.js");

const db_URL = process.env.ATLAS_URL;

async function main() {
  try {
    await mongoose.connect(db_URL);
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
