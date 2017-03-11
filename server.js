//multi-part direct upload to s3 without saving on local disk
//Web Link=> http://stackoverflow.com/a/35902286/3539857
//------------------------------------------------------

require('dotenv').config();

var express = require('express'),
    bodyParser = require('body-parser'),
    upRoute = require(__dirname + '/route');


var app = express();

app.use(bodyParser.json());

//open in browser to see upload form
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/upload', upRoute);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
