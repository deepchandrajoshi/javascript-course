// Create a new array with the result of some operation. The value its callback return are used to form new array.
// arr.map(callbackFnx(value, index, array))

// Purpose: Used to create a new array by applying a provided function to each element of the original array.
// Return Value: A new array with the results of calling a provided function on every element in the calling array.
// Mutability: Does not mutate the original array.
// Chainability: Chainable, as it returns a new array.

let arr = [67, 52, 39];

arr.map((val, index) => {
  console.log(val, index); // 67 0 | 52 1 | 39 2
});

// 2.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8]

//3.
let myArr = [12, 23, 65, 12];
let a = myArr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log(a);
// 12 0 [ 12, 23, 65, 12 ]
// 23 1 [ 12, 23, 65, 12 ]
// 65 2 [ 12, 23, 65, 12 ]
// 12 3 [ 12, 23, 65, 12 ]
// [ 12, 24, 67, 15 ]
