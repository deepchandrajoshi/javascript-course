// NOTES :) Please Resolve ourself first if you can't solve then find the answer

// 1. What is the output of this Question
console.log(" " + 1 + 2);

// 2. What is the output of this code true or false?
let x = 0;
let y = 0;
console.log(++x === y++);

// 3. What is the output of this Question
console.log(NaN == NaN);

// 4. What is the output of this Question
const obj = { i: 80, j: 90 };
const { i, j } = obj; // object destructuring
console.log(i, j);

// 5. What is the output of this Question
let number = 50;
console.log(number);

function print() {
  if (true) {
    number = 60;
    console.log(number);
  }
}
print();
console.log(number);
// 50 60 60

// 6. What is the output of this Question
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(a + b);

// 7. What is the output of this Question
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);
