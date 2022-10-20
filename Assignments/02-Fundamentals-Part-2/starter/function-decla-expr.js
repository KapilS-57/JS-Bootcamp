// Assignmnet LECTURE: Function Declarations vs. Expressions , LECTURE: Arrow Functions & LECTURE: Functions Calling Other Functions

// function populationOfWorld(country, population) {
//     let worldPopulation = 7900;
//     return `${country} has ${population} million people, so it's about ${(population / worldPopulation) * 100}% of
//     the world population`
// }

// console.log(populationOfWorld('India', 1380));

// Arrow Functions
// Functions Calling Other Functions


const populationOfWorld = (country, population) => {
    let worldPopulation = 7900;
    return `${country} has ${population} million people, so it's about ${(population / worldPopulation) * 100}% of
    the world population`
}
console.log(populationOfWorld('India', 1380));

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million
//     people, which is about ${percentage}% of the world.`;
//     console.log(description);
//     };
   


