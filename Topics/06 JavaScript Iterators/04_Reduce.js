// ============================================================================
// Topic: Array.prototype.reduce
// Description: Reduce an array to a single value by executing a reducer function
// ============================================================================

const numbers = [1, 2, 3, 4, 5];

// Sum of all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum); // 15

// Multiply all numbers
const product = numbers.reduce((total, num) => total * num, 1);
console.log("Product:", product); // 120

// Example with objects
const users = [
    { name: "Deep", age: 24 },
    { name: "Chandra", age: 26 },
    { name: "John", age: 20 }
];

const totalAge = users.reduce((total, user) => total + user.age, 0);
console.log("Total Age:", totalAge); // 70

// ============================================================================
// End of 04_Reduce.js
// ============================================================================
