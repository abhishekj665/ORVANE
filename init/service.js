const mongoose = require("mongoose");
const serviceData = require("./data");
const Service = require("../models/service");

const db_URL = process.env.ATLAS_URL;

main()
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect(db_URL);
}

const initData = async() => {
    await Service.deleteMany({});
    await Service.insertMany(serviceData.data);
    console.log("Data was intialized");
}

initData();