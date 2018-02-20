$(document).ready(function() {
    // alert("quiz");
  var counter = 400;
  var timer = $("#timer").text(counter);
  var timeLeft = 0;

  function convertSeconds(s) {
    var minutes = floor(s / 60);
    var seconds = s % 60;
    return min + ":" + sec;
  }

  function timeIt() {
    counter--;
    $("#timer").html(counter);
    if(counter === 0){
    
      clearInterval(interval)
      $(".content").html("<div><strong>TO SLOW</strong></div>");
      
    }
  }

  var interval= setInterval(timeIt, 1000);

});
