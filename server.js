var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var bios = require('./public/assets/bios/bios');
var addRouter = require('./routes/addition');
// var biosRouter = require('./routes/bios');
var app = express();

// middleware running
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));




// routers running
app.use('/addition', addRouter);
// app.use('/bios', biosRouter);

app.get('/', function (req, res) {
  var fileName = path.join(__dirname, 'public/views/index.html');
  res.sendFile(fileName);
});


app.listen(3000);



// app.post('/'), function(req, res) {
//   res.sendStatus(200);
// }
