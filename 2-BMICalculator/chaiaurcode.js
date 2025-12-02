const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#results");

  if (!height || height <= 0) {
    result.innerHTML = "<h2>Please enter a valid height</h2>";
    return;
  }

  if (!weight || weight <= 0) {
    result.innerHTML = "<h2>Please enter a valid weight</h2>";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  result.innerHTML = `<h2>Your BMI is ${bmi}</h2>`;
});
