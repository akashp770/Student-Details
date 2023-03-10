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

router.get("/list", (req, res, next) => {
  StudentModel.find(function (err, response) {
    if (err) res.send(err);
    else
      res.send({
        status: 200,
        students: response,
      });
  });
});

router.get("/searchById", (req, res, next) => {
  const idQuery = req.query.id;
  StudentModel.find({ idQuery }, function (err, response) {
    if (err) res.send(err);
    else
      res.send({
        status: 200,
        resultFound: response.length,
        students: response,
      });
  });
});

router.get("/searchByFirstName", (req, res, next) => {
  const firstNameQuery = req.query.firstName;
  StudentModel.find({ firstName: firstNameQuery }, function (err, response) {
    if (err) res.send(err);
    else
      res.send({
        status: 200,
        resultFound: response.length,
        students: response,
      });
  });
});

router.put("/update", (req, res, next) => {
  const department = req.query.department;
  StudentModel.update(
    { age: 24 },
    { department: department },
    function (err, response) {
      if (err) res.send(err);
      else
        res.send({
          status: 200,
          resultFound: response.length,
          students: response,
        });
    }
  );
});

router.delete("/deleteUser", (req, res, next) => {
  const id = req.query.userId;
  StudentModel.findByIdAndDelete(id, function (err, response) {
    if (err) res.send(err);
    else
      res.send({
        status: 200,
        students: response,
      });
  });
});

module.exports = router;
