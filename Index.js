const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.getElementById("results");
  const message = document.getElementById("message");

  if (height === "" || height < 50 || isNaN(height)) {
    alert("please enter valid height...");
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    alert("please enter valid weight...");
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      message.innerHTML = "Underweight";
    } else if (bmi > 18.6 && bmi < 24.9) {
      message.innerHTML = "Natural";
    } else if (bmi > 24.9) {
      message.innerHTML = "Overweight";
    }
  }
});
