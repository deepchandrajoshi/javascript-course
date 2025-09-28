// ============================================================================
// Topic: Return Values
// Description: Functions can return values using return keyword
// ============================================================================

function add(a, b) {
  return a + b;
}

const result = add(10, 20);
console.log("Sum:", result); // Output: Sum: 30

// Functions can also return other functions
function greet(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const greetDeep = greet("Deep");
greetDeep(); // Output: Hello, Deep!

// ============================================================================
// End of 05_ReturnValues.js
// ============================================================================
