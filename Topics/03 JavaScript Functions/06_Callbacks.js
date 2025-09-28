// ============================================================================
// Topic: Callback Functions
// Description: Functions passed as arguments to other functions
// ============================================================================

// Simple callback example
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Deep", sayGoodbye);
// Output:
// Hello Deep
// Goodbye!

// Callback with arguments
function sum(a, b, callback) {
  const result = a + b;
  callback(result);
}

sum(5, 10, function (res) {
  console.log("Sum is:", res); // Output: Sum is: 15
});

// ============================================================================
// End of 06_Callbacks.js
// ============================================================================
