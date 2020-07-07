var mongoose = require('mongoose');

//import { Event } from '../client/src/app/event';
//import { StudentDataModel } from '../client/src/app/models/studentdata.model';

var studentdata = mongoose.Schema({
    actiBeach:String,
    actiTime: Number,
    actiDate: Date,
    uid: Number,
    attendance: Boolean,
    actiHours: Number
})

var Student = mongoose.model('student', studentdata);

/*Student.addstudent = function(student, callback){
    
}*/

Student.addstudent = function(student, callback){
    student.save((err, result)=>{
        if(err){
            console.log(err);
            callback('Failed to add', null);
        }else{
            callback(null, 'student added');
        }
    });
};

module.exports = Student;