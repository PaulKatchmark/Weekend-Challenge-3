var express = require('express');    //***access to express library***
var path = require('path');         //this is used for minipulating file system paths. Read and create paths
var bodyParser = require('body-parser');

var math = require('./routes/math')
var app = express();                //we need to create base application



app.use(express.static('public'));   // makes everything in the public folder accessable from the server
app.use(bodyParser.urlencoded({extended: true}));    // apply bodyParser to everything now we can use .body to request info. Use for URL encoded requests


app.use('/math', math);


app.get('/', function(req, res) {  //***need to see html***
    res.sendFile(path.join(__dirname, 'public/views/index.html'));    // ****Aboslute path of file we want to send***
  });

app.listen(3000);
