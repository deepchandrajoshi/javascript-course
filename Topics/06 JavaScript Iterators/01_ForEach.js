// ============================================================================
// Topic: Array.prototype.forEach
// Description: Executes a provided function once for each array element
// ============================================================================

const numbers = [1, 2, 3, 4, 5];

// Using forEach
numbers.forEach((num, index) => {
    console.log(`Index ${index}:`, num);
});

// Example: multiply each number by 2
numbers.forEach((num, index, arr) => {
    arr[index] = num * 2;
});

console.log("Doubled Numbers:", numbers); // [2,4,6,8,10]

// ============================================================================
// End of 01_ForEach.js
// ============================================================================
