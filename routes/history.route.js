var express = require('express');
var router = express.Router();

var History = require('../models/history.model');

router.post('/event-list', function(req, res){

    let history = new History({
            beach: req.body.beach,
            hours: req.body.hours,
            date: req.body.date,
            uid: req.body.uid,
            //attendance: req.body.attendance,
    });

    History.addevent(history, (err, result)=>{
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
    History.find({})
    .exec(function(err, hist){
        if(err){
            console.log("Error retrieving events");
            return res.json({success: false, message: err});
        }else{
            return res.json(hist);
        }
    });
});

module.exports = router;
