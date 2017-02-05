//Business interface logic

var leapYear = function(year) {
  return false;
}


//User interface logic

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });

});
