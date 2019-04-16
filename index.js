const questions = [
  {
    title: "How many feet in a meter stick?",
    answers: ["3ft 3in", "3ft", "22in", "5yards"],
    correct: 0
  },
  {
    title: "How many inches in a foot?",
    answers: ["24in", "36in", "12in", "15in"],
    correct: 2
  },
  {
    title: "Among the following which natural number has no predecessor?",
    answers: [100, 200, 1, 0],
    correct: 2
  },
  {
    title:
      "Hannah had $19.27 and Riley had $13.59 how much more money does Hannah have?",
    answers: [6.32, 1.68, 5.61, 5.68],
    correct: 3
  },
  {
    title: "How many right angels in a square?",
    answers: [4, 3, 5, 1],
    correct: 0
  },
  {
    title: "Is 656 a prime number?",
    answers: [true, false],
    correct: 1
  },
  {
    title: "If you had 785 dogs how many would you have if I took 524?",
    answers: [361, 451, 261, 275],
    correct: 2
  },
  {
    title:
      "Harmony had 357 cats and Lindsey had 150 dogs so how many animals are there altogether?",
    answers: [507, 510, 432, 513],
    correct: 0
  },
  {
    title:
      "Julian had 52 webkinz and Bria had 169. How many are there altogether?",
    answers: [231, 201, 221, 220],
    correct: 2
  },
  {
    title:
      "If you want to go to Gurnee Mills and it's 1 hour from your house but you have to wait an extra hour how many hours did t take you to get to Gurnee Mills?",
    answers: ["2 hours", "3 hours", "1,5 hours", "1 hour"],
    correct: 0
  }
];

let guess;
let score = 0;
let currentQuestion = 0;

//math quiz starts once #startQuiz button is hit, this hides the welcome page along with button and shows the quiz.
$(function() {
  $(".start #startQuiz").on("click", function(e) {
    e.preventDefault();
    $(".start").hide();
    $("footer").show();
    $(".question-circle").show();
    $(".score-circle").show();
    $(".quiz").show();
    showQuestion(); //<- shows question
    questionStatus();
    scoreStatus();
  });

  //this eventListner will allow you to addClass selected for your answers and will preform an event deligation
  $(".quiz ul").on("click", "li", function() {
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  //this eventListner will allow you to submit your answer, but if you submit answer before you choose an answer an alert will be shown to user.
  $(".quiz #submitAnswer").click(function(e) {
    e.preventDefault();
    if ($("li.selected").length) {
      let guess = parseInt($("li.selected").attr("id"));
      checkAnswer(guess);
    } else {
      alert("Please select an answer");
    }
  });

  //after you finnish your quiz this eventListner restartQuiz will restart the entire quiz brining you back to the welcome screen
  $(".summary #restartQuiz").click(function(e) {
    e.preventDefault();
    restartQuiz();
  });
});

//this function shows questions by taking the class quiz questions and answers and injecting them into ul/li
function showQuestion() {
  let question = questions[currentQuestion];
  $(".quiz h2").text(question.title);
  $(".quiz ul").html("");
  for (let i = 0; i < question.answers.length; i++) {
    $(".quiz ul").append(`<li id="${i}">${question.answers[i]}</li>`);
  }
}

//this functions checks and scores your quiz
function checkAnswer(guess) {
  let question = questions[currentQuestion];
  if (question.correct === guess) {
    alert("CORRECT!!! 👍😁😁😁👍");
    score++;
  } else {
    alert(`WRONG!!!👎😠😠😠👎 ${question.answers[question.correct]}`);
  }
  currentQuestion++; //<- this currentQuestion increments to your next question
  if (currentQuestion >= questions.length) {
    showSummary();
  } else {
    questionStatus();
    scoreStatus();
    showQuestion();
  }
}

//this function shows your score while taking the quiz
function showSummary() {
  $(".quiz").hide();
  clearStatus();
  $(".summary").show();
  $(".summary p").text(
    `Congrats you scored ${score} out of ${questions.length} correct!`
  );
}

//restarts quiz when finnished
function restartQuiz() {
  $(".summary").hide();
  $(".start").show();
  score = 0;
  currentQuestion = 0;
  showQuestion();
}
/////////////////////////////////////
function questionStatus() {
  $(".question-circle").empty();
  $(".question-circle").append(
    `<p class= 'question-status'>Question ${currentQuestion + 1}/10</p>`
  );
}

function scoreStatus() {
  $(".score-circle").empty();
  $(".score-circle").append(`<p>Score ${score}/10</p>`);
  console.log("scoreStatus ran");
  console.log(score);
}

function clearStatus() {
  $(".question-circle").empty();
  $(".score-circle").empty();
}
