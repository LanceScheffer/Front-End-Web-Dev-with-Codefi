// Create a function that takes a "base number" 
// as an argument. This function should return 
// another function that takes a new argument and 
// returns the sum of the "base number" and the new 
// argument.

function findSum(x) {
    return function findSum2(y){
        return x + y
    }
};

const addSeven = findSum(7)

console.log(addSeven(10));
// returns = 17 in the console log