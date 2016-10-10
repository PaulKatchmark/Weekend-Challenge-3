$(function() {
    console.log('document loaded');

    $('#calculator').on('submit', calculate);
    $('#clear').on('click', clear);
  });


  function calculate(event)  {        //event is automatic because of jquery
    console.log('inside calculate function');
    event.preventDefault();           //ALWAYS NEED this will prevent the defaul behavior
                                        //need to do this to extract information
    // **var data = $(this).serialize();  **     //will send everything as one string

    var array = $(this).serializeArray(); // will send everything as a list of objects

    // console.log('data', data);
    console.log('array', array);

    formData = {};
    array.forEach(function(input) {       //this is for serializeArray to convert evething into object
      formData[input.name] = input.value;

    });
    console.log('formData', formData);
    // $.post('/math', data).then(function(response){    //shorthand form of ajax request
    //   updateDisplay(response.result);
    //   clearForm();
    // })
    $.ajax({
      type: 'POST',
      url: '/math',
      data: formData,    //sending our formData over, but could just send data if you did serialize
      success: function (response) {
        updateDisplay(response.result);
        clearForm();
      }
    });
  };

  function updateDisplay(textToDisplay) {
    $('#display').text(textToDisplay);
  };
  function clearForm(){
    $('#calculator').find('input[type=number], input[type=radio]').val('');
  };
  function clear(){
    clearForm();
    updateDisplay('');
  };
