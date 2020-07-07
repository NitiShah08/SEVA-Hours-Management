var express = require('express');
var router = express.Router();

var Event = require('../models/event.model');

router.post('/admindashboard', (req, res)=>{

    let event = new Event({
        beach: req.body.beach,
        hours: req.body.hours,
        date: req.body.date,
        starttime: req.body.starttime,
    });

    Event.addevent(event, (err, result)=>{
        console.log('entered in func');
        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
});

router.get('/events', (req, res)=>{
    Event.find({})
    .exec(function(err, events){
        if(err){
            console.log("Error retrieving events");
            return res.json({success: false, message: err});
        }else{
            return res.json(events);
        }
    });
});

module.exports = router;


