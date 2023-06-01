let bmi = (weight, height) => {

    bmi = weight / height ** 2;

    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25.0) {
        return "Normal";
    } else if (bmi <= 30.0) {
        return "Overweight";
    } else if (bmi > 30) {
        return "Obese";
    };
};

console.log(bmi(80, 1.80));

//Another way

let bmiAnother = (weight, height) => {
    bmiAnother = weight / height * height;
    return bmiAnother <= 18.5 ? "Underweight" : bmiAnother <= 25.0 ? "Normal" : bmiAnother <= 30.0 ? "Overweight" : "Obese";
};

console.log(bmiAnother(90, 1.80));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let stringToArray = (string) => {
    let array = string.split(" ");

    return array;
};

console.log(stringToArray("I love arrays, they are my favorite"));

//another way 
let stringToArray1 = (string) => {
    return string.split(" ");
}

console.log(stringToArray("I love arrays, they are my favorite"));