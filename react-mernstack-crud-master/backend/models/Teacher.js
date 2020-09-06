const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let teacherSchema = new Schema(
  {
    name: {
      type: String,
    },
    teacherid: {
      type: String,
    },
    class_section: {
      type: String,
    },
  },
  {
    collection: "teachers",
  }
);

module.exports = mongoose.model("Teacher", teacherSchema);
