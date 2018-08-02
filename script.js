$(document).ready(function(){
  $('table').hide();

  $("#search-button").on("click", function(){
    $("table").show();
    //alert("Haj");
    var station = document.getElementById("input").value;
    console.log(station)
    station = station.toUpperCase()
    document.getElementById("station").innerHTML = station;
    document.getElementById("input").value = "";
  })

})
