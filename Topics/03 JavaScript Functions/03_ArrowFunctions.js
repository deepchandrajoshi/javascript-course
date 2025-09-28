// ============================================================================
// Topic: Arrow Functions
// Description: Shorter syntax for function expressions
// ============================================================================

// Arrow function without parameters
const greet = () => "Hello World!";
console.log(greet()); // Output: Hello World!

// Arrow function with parameters
const sum = (a, b) => a + b;
console.log(sum(5, 10)); // Output: 15

// Arrow function with multiple statements requires braces and return
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log(multiply(4, 5)); // Output: 20

// ============================================================================
// End of 03_ArrowFunctions.js
// ============================================================================
