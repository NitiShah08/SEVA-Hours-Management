var mongoose = require('mongoose');

var historydata = mongoose.Schema({
    beach: {
        type: String,
        required: true,
        //unique: true
    },
    hours: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    uid: {
        type: Number,
        required: true
    }
});

var History = mongoose.model('history', historydata);

History.addevent = function(history, callback){
    history.save((err, result)=>{
        if(err){
            console.log(err);
            callback('Failed to add', null);
        }else{
            callback(null, 'event added');
        }
    });
};

module.exports = History;