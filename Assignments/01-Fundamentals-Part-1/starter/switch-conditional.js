// Assignment LECTURE: The switch Statement & LECTURE: The Conditional (Ternary) Operator


let country = 'India';
let population = 1380;
let language = 'hindi';
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

console.log(
    `${country}'s population is ${population > 33 ? 'above' :
        'below'} average`,);