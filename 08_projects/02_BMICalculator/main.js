const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || height === isNaN(height)) {
    result.innerHTML = `${height} is invalid. please provide the correct value`;
  } else if (weight === "" || weight < 0 || weight === isNaN(weight)) {
    result.innerText`${weight} is invalid. please provide the correct value`;
  } else {
    BMI = (weight / ((height * height) / 10000)).toFixed(2);
  }

  function BMIGuide(guide) {
    if (BMI < 18.6) {
      return (guide = "under weight");
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      return (guide = "Normal range");
    } else if (BMI > 24.9) {
      return (guide = "Overweight ");
    }
  }

  result.innerText = `Your BMI is : ${BMI} - ${BMIGuide(BMI)}`;
});
