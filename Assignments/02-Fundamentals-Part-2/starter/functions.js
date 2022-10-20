//  Assignment LECTURE: Functions

'use strict'; // prevent us doing errors

function describeCountry(country, capitalCity, population) {
    let description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}

let country1 = describeCountry('India', 'Delhi', 1380);
console.log(country1);


// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and
//     its capital city is ${capitalCity}`;
// }
// const descPortugal = describeCountry('Portugal', 10,
//     'Lisbon');
// const descGermany = describeCountry('Germany', 83,
//     'Berlin');
// const descFinland = describeCountry('Finland', 6,
//     'Helsinki');
// console.log(descPortugal, descGermany, descFinland);