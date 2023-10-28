const mongoose = require("mongoose");
require("dotenv").config()

const connectDB = async () => {

  const uri = 'mongodb+srv://Aiyush:nqL8kOn6qvRvBBaG@cluster0.gkrk0.mongodb.net/test?retryWrites=true&w=majority'
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