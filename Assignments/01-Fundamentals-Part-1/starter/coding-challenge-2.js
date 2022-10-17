// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

let marksWeight = 95;
let marksHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

let marksBMI = marksWeight / marksHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);
let marksHigherBMI = marksBMI > johnBMI;

console.log(marksBMI, johnBMI, marksHigherBMI);


if (marksHigherBMI) {
    console.log(`Marks BMI is ${marksBMI} which is ${marksBMI - johnBMI} more than john's BMI ${johnBMI}.`);
}
else {
    console.log(`John's BMI is ${johnBMI} which is ${johnBMI - marksBMI} more than mark's BMI ${marksBMI}.`);
}