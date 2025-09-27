// ============================================================================
// Topic: Array Creation
// Description: Different ways to create arrays in JavaScript
// ============================================================================

// Using array literal
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits); // ["Apple", "Banana", "Mango"]

// Using Array constructor
let numbers = new Array(1, 2, 3, 4);
console.log(numbers); // [1, 2, 3, 4]

// Using Array.of
let mixed = Array.of(1, "Hello", true);
console.log(mixed); // [1, "Hello", true]

// Using Array.from
let str = "Deep";
let letters = Array.from(str);
console.log(letters); // ["D","e","e","p"]

// Checking if something is an array
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("Hello")); // false

// ============================================================================
// End of 01_ArrayCreation.js
// ============================================================================
