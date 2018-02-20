$(document).ready(function() {
    alert("quiz");
  var counter = 120;
  var timer = $("#timer").text(counter);
  var timeLeft = 120;

  function convertSeconds(s) {
    var minutes = floor(s / 60);
    var seconds = s % 60;
    return min + ":" + sec;
  }

  function timeIt() {
    counter--;
    $("#timer").html(counter,convertSeconds);
  }

  setInterval(timeIt, 1000);

});
