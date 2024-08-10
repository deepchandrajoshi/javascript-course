// Perform some operation & reduces the array to a single value. It returns that single value.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

const output = arr.reduce((res, curr) => {
  return res + curr;
});
console.log(output); // 36 (addition of all array value)

// ==================================================================================================================== //
// ==================================================================================================================== //

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(fruitCount);
// Output: { apple: 3, banana: 2, orange: 1 }
