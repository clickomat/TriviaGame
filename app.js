$(document).ready(function() {
  var currentQuestion = 0;
  var score = 0;
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

  // document ready brackets

  function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    $("#question").text(q.question);
    $("#opt1").html(q.option1);
    $("#opt2").html(q.option2);
    $("#opt3").html(q.option3);
    $("#opt4").html(q.option4);
    $(".correct").html(q.answer);
  }
 
    $("#nextButton").click(function(e) {
    for (let i = 0; i < questionIndex.length; i++) {
        $("#question").text(q.question);
        $("#opt1").html(q.option1);
        $("#opt2").html(q.option2);
        $("#opt3").html(q.option3);
        $("#opt4").html(q.option4);
        $(".correct").text(q.answer);
      }
      loadQuestion(currentQuestion++);
    });
  

  loadQuestion(currentQuestion);
  
});
