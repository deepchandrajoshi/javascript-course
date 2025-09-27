// ============================================================================
// Topic: Function Parameters
// Description: Passing values to functions
// ============================================================================

// Function with parameters
function greet(name, age) {
  return `Hello ${name}, you are ${age} years old.`;
}

console.log(greet("Deep", 24)); // Output: Hello Deep, you are 24 years old.

// Default parameters
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5)); // Output: 10 (b defaults to 2)
console.log(multiply(5, 3)); // Output: 15

// Rest parameters
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10

// ============================================================================
// End of 04_Parameters.js
// ============================================================================
