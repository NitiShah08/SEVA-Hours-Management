
//import { Time } from "@angular/common";
var mongoose = require('mongoose');

var eventdata = mongoose.Schema({
    beach: {
        type: String,
        required: true,
        unique: true
    },
    hours: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    starttime: {
        type: Number,
        required: true
    }
});

var Event = mongoose.model('event', eventdata);

Event.addevent = function(event, callback){
    event.save((err, result)=>{
        if(err){
            console.log(err);
            callback('Failed to add', null);
        }else{
            callback(null, 'event added');
        }
    });
};

/*Event.getData = function(beach, hours, date, starttime, callback){
    
}*/

module.exports = Event;
module.exports = mongoose.model('event', eventdata, 'events');