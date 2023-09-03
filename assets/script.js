
// Generate your data/carousel
const questions = [
  {
    question: 'Commonly Used Data Types Do not include?',
    answers: [
      { text: 'Strings', correct: false },
      { text: 'alerts', correct: true },
      { text: 'booleans', correct: false },
      { text: 'Numbers', correct: false },
    ]
  },
  {
    question: 'What is the correct syntax for declaring a variable in JavaScript?',
    answers: [
      { text: 'var myVariable = 10;', correct: true },
      { text: 'int myVariable = 10;', correct: false },
      { text: 'let myVariable: 10;', correct: false },
      { text: 'variable myVariable = 10;', correct: false },
    ]
  },
  {
    question: 'How do you create a function in JavaScript?',
    answers: [
      { text: 'function myFunction() {}', correct: true },
      { text: 'def myFunction():', correct: false },
      { text: 'func myFunction() {}', correct: false },
      { text: 'create function myFunction()', correct: false },
    ]
  },
  {
    question: 'Which method removes the last element from an array?',
    answers: [
      { text: 'pop()', correct: true },
      { text: 'shift()', correct: false },
      { text: 'splice()', correct: false },
      { text: 'remove()', correct: false },
    ]
  },
  {
    question: 'How do you write a single-line comment in JavaScript?',
    answers: [
      { text: '< This is a comment >', correct: false },
      { text: '// This is a comment', correct: true },
      { text: '/* This is a comment */', correct: false },
      { text: '-- This is a comment', correct: false },
    ]
  },
  {
    question: 'What is the output of typeof null?',
    answers: [
      { text: '"null"', correct: false },
      { text: '"undefined"', correct: false },
      { text: '"object"', correct: true },
      { text: '"number"', correct: false },
    ]
  },
  {
    question: 'Which of the following is NOT a falsy value in JavaScript?',
    answers: [
      { text: '0', correct: false },
      { text: 'null', correct: false },
      { text: 'true', correct: true },
      { text: '""', correct: false },
    ]
  },
  {
    question: 'How do you find the length of a string stored in a variable str?',
    answers: [
      { text: 'str.length()', correct: false },
      { text: 'str.size()', correct: false },
      { text: 'length(str)', correct: false },
      { text: 'str.length', correct: true },
    ]
  },
  {
    question: 'What is the correct way to check if two variables are equal in value and type?',
    answers: [
      { text: '==', correct: false },
      { text: '===', correct: true },
      { text: 'isEqual()', correct: false },
      { text: 'equals()', correct: false },
    ]
  },
  {
    question: 'Which of the following is used to include external JavaScript code into HTML?',
    answers: [
      { text: '<script src="script.js"></script>', correct: true },
      { text: '<link href="script.js">', correct: false },
      { text: '<include src="script.js">', correct: false },
      { text: '<javascriptfile="script.js">', correct: false },
    ]
  },
  {
    question: 'What will console.log(2 + \'2\') output?',
    answers: [
      { text: '4', correct: false, last: true },
      { text: '22', correct: true, last: true },
      { text: 'TypeError', correct: false, last: true },
      { text: 'NaN', correct: false, last: true },
    ]
  },
];

var questionElement = document.querySelector("#question");
var answerElement = document.querySelector("#answer-buttons");
var startBtn = document.querySelector("#start");
var result = document.querySelector("#result");
var resultArea = document.querySelector(".result-area");
var loser = document.querySelector("#lose");

var logScore = 0;
var index = 0;
var timer = 60;
var timerEL = document.querySelector('#timer')

// Starting the quiz
function startGame() {
  renderQuestion();
  renderAnswers();
  startTimer();
  // Navigate through questions
  startBtn.addEventListener('click', function () {
    navigate(1);
  });

}


// Timer functionality
function startTimer() {
  var intervalId = setInterval(function () {
    timer--;
    timerEL.textContent = timer;
    if (timer <= 0) {
      logScore = 0;
      clearInterval(intervalId);
      window.location.assign("./Leaderboard.html");
      loser.style.display = 'block';

    }
  }, 1000);
  console.log(timer);
}

function navigate(direction) {
  // Incrementing the index
  index += direction;
  if (index < 0) {
    index = questions.length - 1;
    // End of test
  } else if (index >= questions.length) {
    window.location.assign("./Leaderboard.html")
    localStorage.setItem('currentUser', logScore);
  }
  renderQuestion();
  renderAnswers();
}

function renderQuestion() {
  questionElement.textContent = questions[index].question;
}

function renderAnswers() {
  // Clear previous buttons
  answerElement.innerHTML = "";
  for (let i = 0; i < questions[index].answers.length; i++) {
    // Create a new p element
    const btn = document.createElement("button");
    // Add a class to style the button
    btn.className = "btn";
    // Set the text content for the button
    btn.textContent = questions[index].answers[i].text;
    btn.addEventListener('click', function () {
      if (questions[index].answers[i].correct) {
        console.log('That is correct');
        result.style.display = 'block';
        result.textContent = "Correct!";
        navigate(1);
        logScore += 1;
      } else {
        console.log('That is incorrect');
        result.style.display = 'block';
        result.textContent = "That is incorrect. Lose 10 seconds to time";
        navigate(1);
        logScore -= 1;
        timer -= 10;
      }
    });
    // Append the button to the parent element
    answerElement.appendChild(btn);
  }
}

// function gameOver () {
//   if (timer === 0 || )
// };

startGame();

/* Logic yet to be added:
  - timer
  - local storage component
  - adding 10 seconds to clock if answer not correct
  - checking if 'last variable is true to exit game to leaderboard and save initials
*/