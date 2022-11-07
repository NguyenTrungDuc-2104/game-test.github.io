`use strict`;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// ---DRY---
const random = function (randomNumber) {
  document.querySelector(`.number`).textContent = randomNumber;
};
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const backgroundColor = function (backgroundColor) {
  document.querySelector(`body`).style.backgroundColor = backgroundColor;
};
const widthNumber = function (width) {
  document.querySelector(`.number`).style.width = width;
};
const wiriteScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};
const wiriteHighscore = function (highscore) {
  document.querySelector(`.highscore`).textContent = highscore;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  // doan so
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  if (!guess) {
    displayMessage(`⛔ No Number!`);
  } else if (guess === randomNumber) {
    random(randomNumber);
    displayMessage(`🎉 You Win!!`);
    backgroundColor(`#60b347`);
    widthNumber(`30rem`);

    if (score > highscore) {
      highscore = score;
      wiriteHighscore(highscore);
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? `Too high!` : `Too low`);
      score--;
      wiriteScore(score);
    } else {
      displayMessage(`💀 You lost!`);
      score = 0;
      wiriteScore(score);
    }
  }
});

// ---RESET--

document.querySelector(`.again`).addEventListener(`click`, function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  random(`?`);
  displayMessage(`Start guessing...`);
  wiriteScore(score);
  backgroundColor(`#222`);
  widthNumber(`15rem`);
  document.querySelector(`.guess`).value = "";
});
