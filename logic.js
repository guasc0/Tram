//Every line of code should be in the document.ready function
//To be able to run as soon the window load.
$(document).ready(function(){
  $('table').hide();

  $("#search-button").on("click", function(){
    $("table").show();
    //alert("Haj");
    var station = $('#input').val;
    getCards(station)
    $('#test').text("cscs");
  })



})
