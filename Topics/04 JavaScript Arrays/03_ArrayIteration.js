// ============================================================================
// Topic: Array Iteration
// Description: Iterating over arrays using loops and methods
// ============================================================================

let numbers = [1, 2, 3, 4, 5];

// Using for loop
for (let i = 0; i < numbers.length; i++) {
    console.log("for loop:", numbers[i]);
}

// Using for...of loop
for (let num of numbers) {
    console.log("for...of:", num);
}

// Using forEach
numbers.forEach((num, index) => {
    console.log(`forEach index ${index}:`, num);
});

// Using map to create a new array
let squares = numbers.map(num => num * num);
console.log("Squares:", squares);

// Using filter
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Using reduce
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// ============================================================================
// End of 03_ArrayIteration.js
// ============================================================================
