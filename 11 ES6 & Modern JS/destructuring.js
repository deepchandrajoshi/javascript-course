// Array Destructuring
let x,
  y = [1, 5];
console.log(x, y); // undefined [ 1, 5 ]

// rest operator
let [m, n, ...rest] = [1, 3, 54, 65, 65, 23, 34];
console.log(m, n, rest);

// Object Destructuring
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let { a, b } = obj;
console.log(a, b); // 1 2
