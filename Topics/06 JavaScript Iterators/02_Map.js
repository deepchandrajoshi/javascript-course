// ============================================================================
// Topic: Array.prototype.map
// Description: Creates a new array by applying a function to each element
// ============================================================================

const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
const squares = numbers.map(num => num * num);
console.log("Squares:", squares); // [1,4,9,16,25]

// Original array remains unchanged
console.log("Original Numbers:", numbers); // [1,2,3,4,5]

// Example: map objects
const users = [
    { name: "Deep", age: 24 },
    { name: "Chandra", age: 26 }
];

const names = users.map(user => user.name);
console.log("User Names:", names); // ["Deep","Chandra"]

// ============================================================================
// End of 02_Map.js
// ============================================================================
