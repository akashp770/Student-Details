var mongoose = require("mongoose");

var studentsSchema = mongoose.Schema({
  studentId: Number,
  studentName: String,
  studentLastName: String,
  age: Number,
  dob: String,
  department: String,
});

var StudentModel = mongoose.model("Student", studentsSchema);

module.exports = StudentModel;
