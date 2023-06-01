let bmi = (weight, height) => {

  bmi = weight / (height ** 2);

  if (bmi <= 18.5) {
    return "Underweight"
  }

  else if (bmi <= 25) {
    return "Normal"
  }

  else if (bmi <= 30) {
    return "Overweight"
  }

  else if (bmi > 30) {
    return "Obese"
  }

};

bmi(35, 1.83)

console.log(bmi);
