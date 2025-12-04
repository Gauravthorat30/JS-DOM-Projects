const answer = Math.floor(Math.random() * 100 + 1);

const form = document.querySelector(".form");
const guessField = document.querySelector("#guessField");
const subt = document.querySelector("#subt");
const resultParas = document.querySelector(".resultParas");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const p = document.createElement("p");

let prevGuesses = [];
let numOfGuesses = 10;
let playGame = true;

subt.addEventListener("click", function (e) {
  e.preventDefault();
  if (guessField.value == answer) {
    lowOrHi.innerHTML = `<h6 style="color: green;">You guessed it right!</h6>`;
    return;
  }
  if (numOfGuesses == 0) {
    lowOrHi.innerHTML = `<h6 style="color: white;">Game over!</h6>`;
    return;
  }
  if (guessField.value !== answer) {
    numOfGuesses--;
    lastResult.innerHTML = numOfGuesses;
    prevGuesses.push(guessField.value);
    guesses.innerHTML = prevGuesses;
    lowOrHi.innerHTML = `<h6 style="color: red;">Wrong guess!</h6>`;
  }

  if (!(guessField.value > -1 && 101 > guessField.value)) {
    lowOrHi.innerHTML = `<h6 style="color: yellow;">Please enter a valid number</h6>`;
    return;
  }

  console.log(answer);
});
