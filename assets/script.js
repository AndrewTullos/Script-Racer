// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// THEN I can save my initials and score

// Timer Function Psuedocode
/*
  Timer needs to span seconds and add over to minutes for every 60 second interval?

  Activate the timer when pressing the start button with the id of start
  Next create a way to add 10 seconds if a value is false class; or true class do nothing
  When last question is pressed - log time to leaderboard page with option of initials 
    - trigger this via last class


*/

let time = document.getElementById('timer');
let startBtn = document.getElementById('start');
let incorrectAnswer = document.querySelectorAll('.false');
incorrectAnswer.forEach((element) => console.log('Add 10 seconds to clock'));

let correctAnswer = document.querySelectorAll('.true');
correctAnswer.forEach((element) => console.log('Correct'));

let lastQuestionStopTime = document.querySelectorAll('.last');
lastQuestionStopTime.forEach((element) => console.log('stop clock'));


let startTime = 0;
let elapsedTime = 0;
// let hrs = 0;
let mins = 0;
let sec = 0;
let intervalId;


// DOM Content loaded from Reddit solution question
document.addEventListener('DOMContentLoaded', (event) => {
  // Timer
  startBtn.addEventListener('click', function startClock() {
    elapsedTime = Date.now() - startTime;

  })


})l


// Call the function to start the timer
// startTimer();
