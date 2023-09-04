
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

// Elements and Global variables 
var startElement = document.querySelector("#start-notes");
var questionElement = document.querySelector("#question");
var answerElement = document.querySelector("#answer-buttons");
var finalScore = document.querySelector("#score");
var listWinners = document.querySelector(".listWinners");
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit-btn");
var clearWinner = document.querySelector('#clear-all');
var result = document.querySelector("#result")
var quiz = document.querySelector(".app");
var form = document.querySelector("#form");
var loser = document.querySelector("#lose");
// const initialEl = document.getElementById("initial-form");


var currentQuestionIndex;
var logScore = 0;
// "-1" = Prevents skipping first question bug
var index = -1;
var timer = 60;
var clockTime;
var timerEL = document.querySelector('#timer');

// Setting a blank class to store and save winners of quiz
class Winner {
  constructor(initials, logScore) {
    this.initials = initials;
    this.logScore = logScore;
  }
}

// localStorage.setItem('Winner', JSON.stringify(Winner));


function startGame() {
  currentQuestionIndex = 1;
  // Start button on index - sets 1st question
  startBtn.addEventListener('click', function () {
    startElement.style.display = 'none';
    quiz.style.display = 'block';
    // Sets the First Q&A to first question in index
    navQandA(1);
    clearLocalStor();
  });
}


function navQandA(nextQuestion) {
  // Increments the index
  index += nextQuestion;
  if (index < 0) {
    index = question.length - 1;
    // Ends the quiz
  } else if (index >= questions.length) {
    quiz.style.display = 'none';
    scoreCard.style.display = 'block';
  }
  // Calls the first question and answer
  renderQuestions();
  renderAnswers();
}

function renderQuestions() {
  questionElement.textContent = questions[index].question;
};

function renderAnswers() {
  // Clear previous answer buttons - avoids stacking
  answerElement.innerHTML = '';
  // Iterate through the answers to display the content of answers on page
  for (let i = 0; i < questions[index].answers.length; i++) {
    // Create a button
    const btn = document.createElement("button");
    // Set class styling for btn
    btn.className = 'btn';
    // Set text content of created button
    btn.textContent = questions[index].answers[i].text;


    btn.addEventListener('click', function () {
      if (questions[index].answers[i].correct) {
        // Should add 1 to score and 1 to index of question
        logScore++;
        currentQuestionIndex++;
        // Displays answer criteria
        result.style.display = 'block';
        result.textContent = "Correct!";
        navQandA(1);
        quizEnd();
      } else {
        // Should subtract 1 to score and still add 1 to index of questions
        logScore--;
        currentQuestionIndex++;
        // timer -= 10;
        // Displays answer criteria
        result.style.display = 'block';
        result.textContent = "That is incorrect. You lose 10 seconds to time.";
        navQandA(1);
        quizEnd();
      }
    });

    // Append the button to the parent element
    answerElement.appendChild(btn);
  }
  console.log('This is the question index: ' + currentQuestionIndex);
  console.log('This is the score: ' + logScore);
}

// Logs end score result
function quizEnd() {
  if (currentQuestionIndex >= 11) {
    quiz.style.display = 'none';
    result.style.display = 'none';
    form.style.display = 'block';
    finalScore.innerHTML = logScore;
  };
};

function saveWinnerToLocalStorage(winner) {
  // Get existing winners from localStorage
  const winnersJSON = localStorage.getItem('winners');

  // Parse the winner back into an array or create a new array if no winner yet
  const winners = winnersJSON ? JSON.parse(winnersJSON) : [];

  // Adding in the new winner to the array
  winners.push(winner);

  // Save the updated winners array back to localStorage
  localStorage.setItem('winners', JSON.stringify(winners));
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("initial-form");

  // Grabbing the winner's initials
  form.addEventListener('submit', function (event) {
    // Preventing form from clearing
    event.preventDefault();

    // Setting the value of the initilas form
    const winnerInitials = document.getElementById('initials').value;

    // Loading the winner in a new class
    const newInitials = new Winner(winnerInitials, logScore);

    // Saving the new class
    saveWinnerToLocalStorage(newInitials);

    // Populate the scoreboard
  });
});

// Clear local storage
function clearLocalStor() {
  clearWinner.addEventListener('click', function () {
    localStorage.clear();
  })
}


function displayStoredWinners() {
  // Retrieve the JSON string from localStorage
  const winnersJSON = localStorage.getItem('winners');

  // Parse the JSON string into an array
  const winners = winnersJSON ? JSON.parse(winnersJSON) : [];

  // Loop through each object in the array
  // Clear any previous content
  listWinners.textContent = ''; 
  winners.forEach((winner, index) => {
    listWinners.textContent += `Winner ${index + 1}: ${winner.initials} Score: ${winner.logScore}\n`;
    console.log(`Winner ${index + 1}: ${winner.initials} with score ${winner.logScore}`);
  });

}

// Call the function to display the stored winners
displayStoredWinners();





startGame();
