// Assignment LECTURE: Equality Operators: == vs. ===


let numNeighbors = +prompt('How many neighbour countries does your country have?');

if(numNeighbors == 1){
    console.log(`Only ${numNeighbors} border!`);
}else if(numNeighbors > 1){
    console.log(`7More than 1 border`);
}else{
    console.log(`No borders`);
}