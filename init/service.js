const mongoose = require("mongoose");
const serviceData = require("./data");
const Service = require("../models/service");

main()
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/orvane');
}

const initData = async() => {
    await Service.deleteMany({});
    await Service.insertMany(serviceData.data);
    console.log("Data was intialized");
}

initData();