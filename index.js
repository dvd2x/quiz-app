"use strict";

const QUIZ = [
  {
    number: 1,
    question: "How many feet in a meter stick?",
    answer1: "3ft 3in",
    answer2: "3ft",
    answer3: "22in",
    answer4: "5yards",
    question: "How many inches in a foot?",
    number: 2,
    answer1: "24in",
    answer2: "36in",
    answer3: "12in",
    answer4: "15in",
    question:
      "If Hannah had 19.27$ and Riley had 13.59$ how much more money does Hannah have?",
    number: 3,
    answer1: 6.32,
    answer2: 1.68,
    answer3: 5.61,
    answer4: 5.68,
    question: "How many right angels in a square?",
    number: 4,
    answer1: 4,
    answer2: 3,
    answer3: 5,
    answer4: 1,
    question: "Is 656 a prime number?",
    number: 5,
    answer1: true,
    answer2: false,
    question: "If you had 785 dogs how many would you have if I took 524?",
    number: 6,
    answer1: 361,
    answer2: 451,
    answer3: 261,
    answer4: 275,
    question:
      "Harmony had 357 cats and Lindsey had 150 dogs so how many animals are there altogether?",
    number: 7,
    answer1: 507,
    answer2: 510,
    answer3: 432,
    answer4: 513,
    question:
      "Julian had 52 webkinz and Bria had 169. How many are there altogether?",
    number: 8,
    answer1: 231,
    answer2: 201,
    answer3: 221,
    answer4: 220,
    question:
      "If you want to go to Gurnee Mills and it's 1 hour from your house but you have to wait an extra hour how many hours did t take you to get to Gurnee Mills?",
    number: 9,
    answer1: "2 hours",
    answer2: "3 hours",
    answer3: "1,5 hours",
    answer4: "1 hour",
    question:
      "45,269 people died last year (not real) and if 52,036 died this year how many people died in the two years?",
    number: 10,
    answer1: 97305,
    answer2: 98000,
    answer3: 93445,
    answer4: 97856
  }
];

const ANSWERS = [
  "3ft 3in",
  "12in",
  5.68,
  4,
  false,
  261,
  507,
  221,
  "2 hours",
  97305
];

function answersGiven(ask) {
  return `<li>
  <span class="questions">${ask.question}</span> 
</li>
<li>
  <span class="questions">${ask.answer1}</span>
</li>
<li>
  <span class="questions">${ask.answer3}</span>
</li>
<li>
  <span class="questions">${ask.answer4}</span>
</li>
<li>
  <span class="questions">${ask.answer1}</span>
</li>
<li>
  <span class="questions">${ask.answer2}</span>
</li>
<li>
  <span class="questions">${ask.answer3}</span>
</li>
<li>
  <span class="questions">${ask.answer1}</span>
</li>
<li>
  <span class="questions">${ask.answer3}</span>
</li>
<li>
  <span class="questions">${ask.answer1}</span>
</li>
<li>
  <span class="questions">${ask.answer1}</span>
</li>
<li class="button-control">
  <div class="quiz-control">
    <button class="start-quiz">
      <span class="button-label">Let's Begin</span>
    </button>
    <button type="submit" class="next-question">NEXT</button>
  </li>`;
}

function generateQuestions(params) {}
