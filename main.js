let bmi = (weight, height) => {

  bmi = weight / (height ** 2);

  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25) {
    return "Normal";
  } else if (bmi <= 30) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  };

};


console.log(bmi(95, 1.83));
