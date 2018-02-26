$(document).ready(function() {
  var currentQuestion = 0;
  var score = 0;
  var wrong = 0;
  var totQuestions = questions.length;
  var userPick;

  var container = $("#quizContainer");
  var questionE1 = $("#question");
  var opt1 = $("#opt1");
  var opt2 = $("#opt2");
  var opt3 = $("#opt3");
  var opt4 = $("#opt4");
  var nextButton = $("#nextButton");
  var resultCont = $("#result");
  var help;
  var submit = $("#submit");
  var solution = $("#solution")

  // this adds all of my questions and answers form questions js the q becomess the refrence variable to that array.

  function loadQuestion(questionIndex) {
   
    var q = questions[questionIndex];

    console.log(q);
    $("#question").text(q.question);
    $("#opt1").html(q.option1);
    $("#opt2").html(q.option2);
    $("#opt3").html(q.option3);
    $("#opt4").html(q.option4);
    $("#help").html(q.help);
    $("#solution").text(q.answer);
    console.log(q.answer);
  
    }
  
//   this is my attempt to check the answer I call it below on line 62 when the next button is clicked.
  // function checkQuestion(questionIndex) {
  //   var q = questions[questionIndex];
    
  //   var y = $("input[type='radio'].radio").val();
  //   var x = $("#solution").val();
    
  //   if (y === x) {
  //     score++;
  //   } else {
  //     wrong++;
  //   }
  //   console.log(score);
  //   console.log(wrong);
  // }

  $("#nextButton").click(function(e) {
    $("#hint").click(function() {
      console.log("hint clicked");
      $("#help").fadeIn(1500);
    });
    console.log("next clicked");
    currentQuestion++;
    loadQuestion(currentQuestion);
    // checkQuestion();

    //  trying to compare the right answer fand increase score or wrong bases on comparison
  });
  loadQuestion(currentQuestion);
});
