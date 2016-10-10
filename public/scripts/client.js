var x;
var y;
var type;

var calcObj = {
  x: "",
  y: "",
  type: "",
}

$(function() {

// doMath()
//
// function doMath(){
  $('.key').on('click', function() {
        $(this).data('value').appendDom('.screen');
        // console.log(d);
  });
// }





$.ajax({
  type: "POST",
  url: "/addition",
  success: function(data) {
    ///code of some sort
  }
})









});



// var numberObject = {
//     propertyOne: 'oneInput',
//     propertyTwo: 'twoInput',
//     propertyThree: 'totalCalc',
// };
// console.log(numberObject);
//
//
// $('.clear').on('click', function() {
//         function clearFields() {
//             $('.num1').empty();
//             $('.num2').empty();
//             $('.total').empty();
//         }
//     });
//
//
// $(function() {
//
//     getCalculation();
//
//     var oneInput = $('.num1').val();
//     var twoInput = $('.num2').val();
//     var totalCalc ="";
//
//
//     $('#equalButton').on('submit', function(event) {
//         event.preventDefault();
//         $.ajax({
//             type: 'POST',
//             url: '/' + numberObject.propertyThree,
//             data: numberObject,
//             success: getCalculation
//         });
//         $('.num1').find('input[type=text]').val('');
//         $('.num2').find('input[type=text]').val('');
//         $(this).on('click', function (){
//           totalCalc = $(this);
//   console.log("num1: ", $('.num1'));
//         })
//         oneInput = $('.num1').val();
//         twoInput = $('.num2').val();
//
//
//
//     });
//
// });
//
// function getCalculation() {
//     $.ajax({
//         type: 'GET',
//         url: '/' + numberObject.propertyThree,
//         success: function(math) {
//             $('.total').text(math);
//         }
//     });
// };













    // var totalAnswer = function(answer) {
    //   $('.total').text(answer);
    // }



    //
    // $('#addNum').on('click', function() {
    //     totalCalc = '+';
    // });
    // $('#subtractNum').on('click', function() {
    //     totalCalc = '-';
    // });
    // $('#multiplyNum').on('click', function() {
    //     totalCalc = '*';
    // });
    // $('#divideNum').on('click', function() {
    //     totalCalc = '/';
    // });
    //
    // $('#equalButton').on ('click', function(event) {
    //   event.preventDefault();
    //   getCalculation();
    //   //clear input fields
    // });
