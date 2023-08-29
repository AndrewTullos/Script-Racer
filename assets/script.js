
// Generate your data/carousel
const questions = [
  {
    question: 'Commonly Used Data Types Do not include?',
    answers: [
      { text: 'Strings', correct: false, last: false },
      { text: 'alerts', correct: true, last: false },
      { text: 'booleans', correct: false, last: false },
      { text: 'Numbers', correct: false, last: false },
    ]
  },
  {
    question: 'What is the correct syntax for declaring a variable in JavaScript?',
    answers: [
      { text: 'var myVariable = 10;', correct: true, last: false },
      { text: 'int myVariable = 10;', correct: false, last: false },
      { text: 'let myVariable: 10;', correct: false, last: false },
      { text: 'variable myVariable = 10;', correct: false, last: false },
    ]
  },
  {
    question: 'How do you create a function in JavaScript?',
    answers: [
      { text: 'function myFunction() {}', correct: true, last: false },
      { text: 'def myFunction():', correct: false, last: false },
      { text: 'func myFunction() {}', correct: false, last: false },
      { text: 'create function myFunction()', correct: false, last: false },
    ]
  },
  {
    question: 'Which method removes the last element from an array?',
    answers: [
      { text: 'pop()', correct: true, last: false },
      { text: 'shift()', correct: false, last: false },
      { text: 'splice()', correct: false, last: false },
      { text: 'remove()', correct: false, last: false },
    ]
  },
  {
    question: 'How do you write a single-line comment in JavaScript?',
    answers: [
      { text: '&lt;!-- This is a comment --&gt;', correct: false, last: false },
      { text: '// This is a comment', correct: true, last: false },
      { text: '/* This is a comment */', correct: false, last: false },
      { text: '-- This is a comment', correct: false, last: false },
    ]
  },
  {
    question: 'What is the output of typeof null?',
    answers: [
      { text: '"null"', correct: false, last: false },
      { text: '"undefined"', correct: false, last: false },
      { text: '"object"', correct: true, last: false },
      { text: '"number"', correct: false, last: false },
    ]
  },
  {
    question: 'Which of the following is NOT a falsy value in JavaScript?',
    answers: [
      { text: '0', correct: false, last: false },
      { text: 'null', correct: false, last: false },
      { text: 'true', correct: true, last: false },
      { text: '""', correct: false, last: false },
    ]
  },
  {
    question: 'How do you find the length of a string stored in a variable str?',
    answers: [
      { text: 'str.length()', correct: false, last: false },
      { text: 'str.size()', correct: false, last: false },
      { text: 'length(str)', correct: false, last: false },
      { text: 'str.length', correct: true, last: false },
    ]
  },
  {
    question: 'What is the correct way to check if two variables are equal in value and type?',
    answers: [
      { text: '==', correct: false, last: false },
      { text: '===', correct: true, last: false },
      { text: 'isEqual()', correct: false, last: false },
      { text: 'equals()', correct: false, last: false },
    ]
  },
  {
    question: 'Which of the following is used to include external JavaScript code into HTML?',
    answers: [
      { text: '<script src="script.js"></script>', correct: true, last: false },
      { text: '<link href="script.js">', correct: false, last: false },
      { text: '<include src="script.js">', correct: false, last: false },
      { text: '<javascriptfile="script.js">', correct: false, last: false },
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
var index = 0;

function startGame() {
  renderQuestion();
  renderAnswers();
  startBtn.addEventListener('click', function () {
    // Starting the quiz
    navigate(1);
  });
}

function navigate(direction) {
  // Incrementing the index
  index += direction;
  if (index < 0) {
    index = questions.length - 1;
  } else if (index >= questions.length) {
    // Loop back to the first question
    index = 0;
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
    // Create a new button element
    const btn = document.createElement("button");
    // Add a class to style the button
    btn.className = "btn";
    // Set the text content for the button
    btn.textContent = questions[index].answers[i].text;
    btn.addEventListener('click', function () {
      if (questions[index].answers[i].correct) {
        console.log('That is correct');
        navigate(1);
      } else {
        console.log('That is incorrect');
        navigate(1);
      }
    });
    // Append the button to the parent element
    answerElement.appendChild(btn);
  }
}


startGame();

/* Logic yet to be added:
  - timer
  - local storage component
  - adding 10 seconds to clock if answer not correct
  - checking if 'last variable is true to exit game to leaderboard and save initials
*/