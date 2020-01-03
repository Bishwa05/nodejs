const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

require("../model");
// require("../model/course.model");

const CourseModel = mongoose.model("Course");

router.get("/add", (req, res) => {
    res.render("add-course");
});

router.post("/add", (req, res) => {
    console.log(req.body);
    var course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseFees = req.body.courseFees;
    course.courseId = Math.ceil(Math.random()*1000)+"";

    course.save((err, doc) =>{
        if(!err){
            //res.redirect("list");
            res.json({message: "successfull", status : "ok"});
        } else {
            res.send("Error occurred");
        }
    });

    // res.render("add-course");
});

router.get("/list", (req, res) =>{
    // Setting


    CourseModel.find((err, docs) => {
        if(!err){
            console.log("Bishwa");
            console.log(docs);
            res.render("list", {data : docs});
        }
    });
});

module.exports = router;
