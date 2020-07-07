var express = require('express');
var router = express.Router();

var Student = require('../models/student.model');
//import { Event } from '../client/src/app/event';

router.post('/dashboard', function(req, res){
    
    let student = new Student({
        actiBeach: req.body.actiBeach,
        actiTime: req.body.actiTime,
        actiDate: req.body.actiDate,
        uid: req.body.uid,
        attendance: req.body.attendance,
        actiHours: req.body.actiHours
    });

    Student.addstudent(student, (err, result)=>{
        if(err){
            console.log(err);
            callback('Failed to add', null);
        }else{
            res.json(result);
            callback(null, 'student added');
        }
    });
});

router.get('/event-list', (req, res)=>{
    Student.find({})
    .exec(function(err, students){
        if(err){
            console.log("Error retrieving students");
            return res.json({success: false, message: err});
        }else{
            return res.json(students);
        }
    });
});
module.exports = router;