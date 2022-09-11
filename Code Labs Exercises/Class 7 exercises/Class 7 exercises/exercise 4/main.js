const students = ([
{name: "Lance", age: 21, budget: 31000},
{name: "Ben",   age: 21, budget: 53000},
{name: "Alexis",age: 21, budget: 48000}    
]);
// Try to use Reduce function
const total = students.reduce((currentTotal, item ) => {
    return item.budget + currentTotal
}, 0);

console.log(total)
