var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
const StudentModel = require("../models/student-model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Students routes work");
});

router.post("/add", (req, res, next) => {
  let newStudent = new StudentModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    dob: req.body.dob,
    department: req.body.department,
  });
  newStudent.save(function (err, newStudent) {
    if (err) res.send(err);
    else
      res.send({
        status: 200,
        message: "User added sucessfully",
        studentObj: newStudent,
      });
  });
});

module.exports = router;
