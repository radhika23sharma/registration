const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    rollno: {
      type: Number,
    },
    student_class: {
      type: Number,
    },
    section: {
      type: String,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Student", studentSchema);
