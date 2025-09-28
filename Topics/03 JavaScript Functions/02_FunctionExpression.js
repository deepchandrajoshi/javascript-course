// ============================================================================
// Topic: Function Expression
// Description: Function assigned to a variable
// ============================================================================

// Function Expression
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Chandra")); // Output: Hello, Chandra!

// Function Expressions are NOT hoisted
// console.log(sum(5, 10)); // ❌ Error

const sum = function (a, b) {
  return a + b;
};

console.log(sum(5, 10)); // Output: 15

// ============================================================================
// End of 02_FunctionExpression.js
// ============================================================================
