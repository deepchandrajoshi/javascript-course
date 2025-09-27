// Function Hoisting
hoistedFunction(); // Output: "This function has been hoisted!"

function hoistedFunction() {
  console.log("This function has been hoisted!");
}

// Variable Hoisting
// Variables declared with let and const are also hoisted but are not initialized. They are in a "temporal dead zone" from the start of the block until the declaration is encountered. Accessing them before the declaration results in a ReferenceError.
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;

console.log(x); // Output: undefined
var x = 5;

// Summery
// var declarations are hoisted and initialized with undefined.
// let and const declarations are hoisted but not initialized (temporal dead zone).
// function declarations are hoisted with their definitions.
