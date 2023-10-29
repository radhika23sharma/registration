let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let dbConfig = require("./database/db");

// Express Route
const studentRoute = require("./routes/student.route");
const teacherRoute = require("./routes/teacher.routes");

// Connecting mongoDB Database
const uri = "mongodb://127.0.0.1:27017/form"
try {
   mongoose.connect(uri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,

  });

  console.log("MongoDB Connected:", mongoose.connection.host);
} catch (error) {
  console.error("MongoDB Connection Error:", error);
}

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/students", studentRoute);
app.use("/teachers", teacherRoute);

// PORT
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
