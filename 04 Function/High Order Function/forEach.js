// arr.forEach(callBackFunction)
// CallBackFunction : here, it is a function to execute for each element in the array.
// a callBack is a function passed as an argument to another function.

// Purpose: Used to execute a provided function once for each array element.
// Return Value: undefined.
// Mutability: Does not mutate the original array, but can be used to perform side effects (e.g., modifying elements in place).
// Chainability: Not chainable since it returns undefined.
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
  console.log(val); // 1 2 3 4 5
});

// arrow function
arr.forEach((val) => {
  console.log(val * 2); // 1 2 3 4 5
});

let cities = ["almora", "delhi", "mumbai"];
cities.forEach((val, idx, cities) => {
  console.log(val.toUpperCase(), idx, cities); // ALMORA 0 [ 'almora', 'delhi', 'mumbai' ]..............................so on..
});

// ==================================================================================================================== //
// ==================================================================================================================== //

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
  console.log(index, `:`, number, `:`, numbers);
});

// Output:
// 0 : 1 : [ 1, 2, 3, 4, 5 ]
// 1 : 2 : [ 1, 2, 3, 4, 5 ]
// 2 : 3 : [ 1, 2, 3, 4, 5 ]
// 3 : 4 : [ 1, 2, 3, 4, 5 ]
// 4 : 5 : [ 1, 2, 3, 4, 5 ]

// ==================================================================================================================== //
// ==================================================================================================================== //
