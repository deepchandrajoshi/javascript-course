//Create a new array of element that give true for a condition/filter.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(newArr); // filter of even array

// ==================================================================================================================== //
// ==================================================================================================================== //
let myArr = [23, 0, 3, 34, 56, 7];
let a2 = myArr.filter((value) => {
  return value > 10;
});
console.log(a2); // [ 23, 34, 56 ]
