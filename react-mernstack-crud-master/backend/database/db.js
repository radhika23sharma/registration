const mongoose = require("mongoose");
require("dotenv").config()

const connectDB = async () => {

  const uri = 'mongodb://127.0.0.1:27017/form'
  try {
    console.log(uri,"11111111111")
    await mongoose.connect(uri.toString(),{
      useNewUrlParser:true,
      connectionParams
    });

    console.log("MongoDB Connected:", mongoose.connection.host);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

module.exports = connectDB;