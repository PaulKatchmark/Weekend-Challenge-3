var express = require('express');
var router = express.Router();




router.post('/addition', function (req, res) {
//some code here
res.sendStatus(200);
});




module.exports = router;



//
// router.get('/', function (oneInput, twoInput, totalCalc){
//   console.log(math);
//   res.send(math);
// });

//   if (totalCalc == '+') {
//   return math.push(parseInt(oneInput) + parseInt(twoInput));
// } else if (totalCalc == '-') {
//   return math.push(oneInput - twoInput);
// } else if( totalCalc == '*') {
//   return math.push(oneInput * twoInput);
// } else {
//   return math.push(oneInput / twoInput);
// }
