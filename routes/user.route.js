
var express = require('express');
var router = express.Router();

var User = require('../models/user.model');

router.post('/register', (req, res)=>{
    let user = new User({
        uid: req.body.uid,
        password: req.body.password
    });
    
    User.addUser(user, (err, result)=>{
        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
});


router.post('/login', (req, res)=>{
    User.login(req.body.uid, req.body.password, (err, result)=>{
        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
});


module.exports = router;