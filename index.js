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
    answers: ["2 hours", "3 hours", "1.5 hours", "1 hour"],
    correct: 0
  }
];

let guess;
let score = 0;
let currentQuestion = 0;

const correctFeedback = `
  <section class="feedback-page" role="main">
    <h2>CORRECT!</h2>
    <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="the office funny dance">
    <h3>WE MUST CELEBRATE HOLD ON</h3>
  </section>
`;

const wrongFeedback = `
<section class="feedback-page" role="main">
  <h2>WRONG!!!</h2>
  <img src="https://media.giphy.com/media/c9IDsR5ooqvW8/giphy.gif" alt="me my self and Irean funny fight">
  <h3>WE CAN FIGHT OUR WAY OUT OF THIS</h3>
</section>
`;

const youDidNotAnswerQuestion = `
<section class="feedback-page" role="main">
  <h2>Answer The Question Please!</h2>
  <img src="https://media.giphy.com/media/3oEjI1VtfLh9WYsHwQ/giphy.gif" alt="answer the question gif">
  <button id="next-button">Next</button>
</section>
`;

const summery = `<div class="right-side">
<div class="summary">
  <p>Congrats you scored x out of y correct!</p>
  <button id="restartQuiz">Restart Quiz</button>
</div>
</div>`;

const start = `<div class="start">
<h1>Do you think you can Pass a 8th grade Math Quiz</h1>
<button id="startQuiz">Start Quiz</button>
</div>`;

const quiz = `<div class="quizStart" style="display:block;">
<form class="quiz">
  <fieldset>
    <legend style="font-size: 30px;"></legend>
    <ul style="text-align:left"></ul>
  </fieldset>
  <button type="submit" id="submitAnswer">Submit Answer</button>
</form>
</div>`;

//math quiz starts once #startQuiz button is hit, this hides the welcome page along with button and shows the quiz.
$(function() {
  $("main").on("click", ".start #startQuiz", function(e) {
    e.preventDefault();
    $("footer").show();
    $(".question-circle").show();
    $(".score-circle").show();
    $("main").html(quiz);
    showQuestion(); //<- shows question
    questionStatus();
    scoreStatus();
  });

  //// NEXT BUTTON ////////////////////
  $("main").on("click", "#next-button", function(e) {
    // ('.feedback-page').prev()
    if (currentQuestion >= questions.length) {
      showSummary();
      console.log("summery");
    } else {
      showQuestion();
      console.log("question");
    }
  });

  // allows the entire answer button to be clicked
  $("main").on("click", "form li", function(e) {
    $(this)
      .find("input")
      .prop("checked", true);
  });

  //this eventListner will allow you to submit your answer, but if you submit answer before you choose an answer an alert will be shown to user.
  $("main").on("submit", "form", function(e) {
    e.preventDefault();
    let guess = parseInt($('input[type="radio"]:checked').val());
    //console.log($("main"));
    checkAnswer(guess);
  });

  //after you finnish your quiz this eventListner restartQuiz will restart the entire quiz brining you back to the welcome screen
  $("main").on("click", ".summary #restartQuiz", function(e) {
    restartQuiz();
  });
});

//this function shows questions by taking the class quiz questions and answers and injecting them into ul/li
function showQuestion() {
  let question = questions[currentQuestion];
  // alert("Working");
  $("main").html(quiz);
  $(".quiz legend").text(question.title);
  for (let i = 0; i < question.answers.length; i++) {
    $(".quiz ul").append(
      `<li id="${i}"><label for="${i}"><input type="radio" value="${i}" name="answer" required>${
        question.answers[i]
      }</label></li>`
    );
  }
}

//this functions checks and scores your quiz
function checkAnswer(guess) {
  let question = questions[currentQuestion];
  if (question.correct === guess) {
    $("main").html(correctFeedback);
    score++;
  } else {
    $("main").html(wrongFeedback);
  }
  currentQuestion++; //<- this currentQuestion increments to your next question
  if (currentQuestion >= questions.length) {
    showSummary();
  } else {
    setTimeout(function() {
      questionStatus();
      scoreStatus();
      showQuestion();
    }, 2000);
  }
}

//this function shows your score while taking the quiz
function showSummary() {
  clearStatus();
  $("main").html(summery);
  $(".summary p").text(
    `Congrats you scored ${score} out of ${questions.length} correct!`
  );
}

function showStart() {
  $("main").html(start);
}
//restarts quiz when finnished
function restartQuiz() {
  $("main").html(start);
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

$(showStart);
