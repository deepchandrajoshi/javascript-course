// ============================================================================
// Topic: find, findIndex, some, every
// Description: Advanced array searching and condition checks
// ============================================================================

const numbers = [1, 2, 3, 4, 5, 6, 7];

// find - returns first element that satisfies condition
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First Even Number:", firstEven); // 2

// findIndex - returns index of first element that satisfies condition
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("Index of First Even:", firstEvenIndex); // 1

// some - checks if at least one element passes the test
const hasEven = numbers.some(num => num % 2 === 0);
console.log("Has Even Number:", hasEven); // true

// every - checks if all elements pass the test
const allPositive = numbers.every(num => num > 0);
console.log("All Positive:", allPositive); // true

// ============================================================================
// End of 05_FindSomeEvery.js
// ============================================================================
