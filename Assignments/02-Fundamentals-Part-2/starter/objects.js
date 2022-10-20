//  Assignment LECTURE: Introduction to Objects , LECTURE: Dot vs. Bracket Notation & LECTURE: Object Methods


const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 1380,
    neighbours: ['SriLanka', 'Nepal', 'Bhutan', 'Pakistan', 'Afghanistan', 'China'],
    describe: function () {
        console.log(
            `${this.country} has ${this.population} million
    ${this.language}-speaking people,
    ${this.neighbours.length} neighbouring countries and a
    capital called ${this.capital}.`
        );
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true :
            false;
        // Even simpler version (see why this works...)
        // this.isIsland = !Boolean(this.neighbours.length);
    }
};


// console.log(
//     `${myCountry.country} has ${myCountry.population} million
//         ${myCountry.language}-speaking people,
//         ${myCountry.neighbours.length} neighbouring countries and
//         a capital called ${myCountry.capital}.`
// );
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);



myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);