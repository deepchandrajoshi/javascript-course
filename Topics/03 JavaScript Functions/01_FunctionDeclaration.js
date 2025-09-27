// ============================================================================
// Topic: Function Declaration
// Description: Functions declared using the 'function' keyword
// ============================================================================

// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Calling the function
console.log(greet("Deep")); // Output: Hello, Deep!

// Function can be called before declaration due to hoisting
console.log(sum(5, 10)); // Output: 15

function sum(a, b) {
  return a + b;
}

// ============================================================================
// End of 01_FunctionDeclaration.js
// ============================================================================
