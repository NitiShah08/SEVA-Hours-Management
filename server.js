// my node start point

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var config = require('./config');
var userRoute = require('./routes/user.route');
var eventRoute = require('./routes/event.route');
var studentRoute = require('./routes/student.route');
var historyRoute = require('./routes/history.route');

// connect to mongoDB 
mongoose.connect(config.dbUrl, function(err){
    if(err){
        console.error("Error! " + err);
    }
});
mongoose.connection.on('connected', () => {
    console.log('connected to mongo database');
});

mongoose.connection.on('error', err => {
    console.log('Error at mongoDB: ' + err);
});

var port = 3000;
var app = express();

app.use(cors());
// add middleware 
app.use(bodyParser.json());
app.use('/users', userRoute);
app.use('/event', eventRoute);
app.use('/student', studentRoute);
app.use('/history', historyRoute);

// set public resoures folder
app.use(express.static(__dirname + '/public'));

// set your first route
app.get('/', (req, res) => {
    // res.send('Hello Nodemon!');
    res.sendFile(path.join(__dirname, 'client/src/index.html'));
});

var server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is starting = ' + port);
});

