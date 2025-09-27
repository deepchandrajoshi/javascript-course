// ============================================================================
// Topic: Array Methods
// Description: Common methods to manipulate arrays
// ============================================================================

let fruits = ["Apple", "Banana", "Mango"];
console.log("Original:", fruits);

// Adding elements
fruits.push("Orange"); // Add at end
console.log("After push:", fruits);

fruits.unshift("Strawberry"); // Add at start
console.log("After unshift:", fruits);

// Removing elements
fruits.pop(); // Remove last
console.log("After pop:", fruits);

fruits.shift(); // Remove first
console.log("After shift:", fruits);

// Finding index and removing
let index = fruits.indexOf("Banana");
if (index !== -1) {
    fruits.splice(index, 1); // Remove 1 element at index
}
console.log("After removing Banana:", fruits);

// Slice and Splice
let newFruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(newFruits.slice(1,3)); // ["Banana", "Mango"] (does not change original)
newFruits.splice(1,2,"Grapes","Peach"); // Replace 2 elements starting at index 1
console.log("After splice:", newFruits);

// Concat arrays
let arr1 = [1,2];
let arr2 = [3,4];
let combined = arr1.concat(arr2);
console.log("Combined:", combined);

// Join elements
console.log(fruits.join(", ")); // Apple, Mango

// ============================================================================
// End of 02_ArrayMethods.js
// ============================================================================
