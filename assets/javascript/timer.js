
$(".content").hide();
$("#help").hide();
$("#result").hide()
// $("#solution").hide()
$(document).ready(function () {
  
  
  $("#start").on("click", function () {
    converted = convertSeconds(counter);
    $("#timer").html(converted);
    // $("#start").html("Stop");
    $(".content").fadeIn();
    clock = setInterval(timeIt, 1000);
    
    
  });

});

var counter = 120;
var converted;

// var timer = $("#timer").text(counter);
// var timeLeft = 120;

function convertSeconds(s) {
  var minutes = Math.floor(s / 60);
  var seconds = s % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

function timeIt() {
  counter--;
  converted = convertSeconds(counter);
  $("#timer").html(converted);
  if (counter === 0) {
    converted = convertSeconds(counter);
    $("#timer").html(converted);
    $(".content").fadeOut(3000);
    clearInterval(clock);
    $(".clock").html("Times UP!")
  }
}



$("#stop").on("click", function () {
  clearInterval(clock);
  $(".content").fadeOut();
});

$("#hint").on("click", function(){
  $("#help").fadeIn(3000);
})