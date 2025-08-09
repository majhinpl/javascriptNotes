const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (height === "" || height === isNaN(height)) {
    console.log(`${height} is invalid. please provide the correct value`);
  } else if (weight === "" || weight === isNaN(weight)) {
    console.log(`${weight} is invalid. please provide the correct value`);
  } else {
    BMI = Math.floor((weight / height / height) * 10000).toFixed(2);
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

  const result = document.querySelector("#results");
  result.innerText = `Your BMI is : ${BMI} - ${BMIGuide(BMI)}`;
});
