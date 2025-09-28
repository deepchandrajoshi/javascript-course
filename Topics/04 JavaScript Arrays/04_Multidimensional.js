// ============================================================================
// Topic: Multidimensional Arrays
// Description: Arrays of arrays and nested iteration
// ============================================================================

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log("Matrix:", matrix);

// Accessing elements
console.log("Element at [0][1]:", matrix[0][1]); // 2

// Iterating nested arrays
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`matrix[${i}][${j}] =`, matrix[i][j]);
    }
}

// Using forEach for nested arrays
matrix.forEach((row, i) => {
    row.forEach((value, j) => {
        console.log(`matrix[${i}][${j}] =`, value);
    });
});

// Using map to transform a 2D array
let doubled = matrix.map(row => row.map(num => num * 2));
console.log("Doubled Matrix:", doubled);

// ============================================================================
// End of 04_Multidimensional.js
// ============================================================================
