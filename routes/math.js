var router = require('express').Router();

router.post('/', function(req, res) {
  console.log(req.body);  //makesure this works
 var operation = req.body.operation;
 var x = parseFloat(req.body.x);
 var y = parseFloat(req.body.y); //to convert them to numbers

 switch(operation) {
  case 'add':
    res.send({result: x + y});
    break;
  case 'subtract':
    res.send({result: x - y});  //wrap in object {} so express doesn't think we are trying to send a status code, will be sent as JSON
    break;
  case 'multiply':
    res.send({result: x * y});
    break;
  case 'divide':
    res.send({result: x / y});
    break;
  default:
    res.status(400).send('unknown operation');
 }
  res.sendStatus(200);
 });
//
module.exports = router; //need to do this after creating var router to export the info from this page
