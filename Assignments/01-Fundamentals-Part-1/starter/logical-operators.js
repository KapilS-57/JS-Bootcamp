//  Assignment LECTURE: Logical Operators

let hasLanaguageEnglish = 'English';
let isNotIsland = true;
let populationLow = 50;

let country = 'India';
let countryLanguage = 'Hindi';
let isIsland = false;
let population = 1380;

if (hasLanaguageEnglish === countryLanguage && isNotIsland !== isIsland && population < populationLow) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}