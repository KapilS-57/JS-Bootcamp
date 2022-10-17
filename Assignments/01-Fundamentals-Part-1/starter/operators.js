
// Assignemnt LECTURE: Basic Operators & LECTURE: Strings and Template Literals

let country = 'India';
let continent = 'Asia';
let indiaPopulation = 1380;
let language = 'Hindi';

let finlandPopulation = 6;
let avgPopulation = 33;

let halfIndiaPopulation = indiaPopulation / 2;

console.log('New Population of India : ' + halfIndiaPopulation);

indiaPopulation += 1;
console.log('Increase India Population by 1 : ' + indiaPopulation);

console.log(indiaPopulation > finlandPopulation);

console.log(indiaPopulation > avgPopulation);

let description = `${country} is in ${continent}, and its ${indiaPopulation} million
people speak ${language}`;

console.log('My country description : ' + description);


