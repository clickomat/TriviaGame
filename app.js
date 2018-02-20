// variables

$(document).ready(function() {  
  // alert("app");
  var currentQuestion = 0;
  var score = 0;
  var totQuestions = questions.length;

  var container = $("#quizContainer");
  var questionE1 = $("#question");
  var opt1 = $("#opt1");
  var opt2 = $("#opt2");
  var opt3 = $("#opt3");
  var opt4 = $("#opt4");
  var nextButton = $("#nextButton");
  var resultCont = $("#result")
  // document ready brackets

  function loadQuestion(questionIndex) {
    var q = questions[questionIndex]
    $("#question").text(q.question);
    $("#opt1").html(q.option1);
    $("#opt2").html(q.option2);
    $("#opt3").html(q.option3);
    $("#opt4").html(q.option4);
  };
  function loadNextQuestion(){
    //check whther or not the rario nutton is selected
    var selectedOption= document.querySelector("input[type=radio]:checked")
    if(!selectedOption){
      alert("Select your Answer");
      return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
      score+=10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions-1){
      $("#nextButton").text("Finish");
    }
    if(currentQuestion == totQuestions){
      $("#container").css({
        display:none,
      });
      $("#result").css(show);
      resultCont.textContent = "Score:" + score;
      return;
    }
    loadQuestion(currentQuestion);
  }
  loadQuestion(currentQuestion); 
});
