// ============================================================================
// Topic: Array.prototype.filter
// Description: Creates a new array with elements that pass a test
// ============================================================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // [2,4,6,8,10]

// Filter numbers greater than 5
const greaterThanFive = numbers.filter(num => num > 5);
console.log("Numbers > 5:", greaterThanFive); // [6,7,8,9,10]

// Example with objects
const users = [
    { name: "Deep", age: 24 },
    { name: "Chandra", age: 26 },
    { name: "John", age: 20 }
];

const adults = users.filter(user => user.age >= 24);
console.log("Adults:", adults); // [{name:"Deep",age:24},{name:"Chandra",age:26}]

// ============================================================================
// End of 03_Filter.js
// ============================================================================
