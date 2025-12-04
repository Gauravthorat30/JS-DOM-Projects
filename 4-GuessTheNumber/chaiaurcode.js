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
  if (!playGame) {
    return;
  }
  if (!(guessField.value > -1 && 101 > guessField.value)) {
    lowOrHi.innerHTML = "please put vaue a valid value";
    return;
  }
  numOfGuesses--;
  lastResult.innerHTML = numOfGuesses;
  prevGuesses.push(guessField.value);
  guesses.innerHTML = prevGuesses;
  console.log(answer);
});
