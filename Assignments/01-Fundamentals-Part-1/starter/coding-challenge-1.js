// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// TEST DATA 1:
// let marksWeight = 78;
// let marksHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// TEST DATA 2:
let marksWeight = 95;
let marksHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

let marksBMI = marksWeight / marksHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);
let marksHigherBMI = marksBMI > johnBMI;

console.log(marksBMI, johnBMI, marksHigherBMI);

