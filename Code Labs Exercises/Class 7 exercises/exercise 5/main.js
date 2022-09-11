// Write a function that converts an object into 
// an array, where each element represents a key-value 
// pair in the form of an array.

let playersNumbers = {
    "Jordan": 23,
    "Curry": 30,
    "Chamberlain": 13,
    "Oneal": 34,
    "Bryant": 24
};

let arr = Object.entries(playersNumbers);
// console.log (playersNumbers)