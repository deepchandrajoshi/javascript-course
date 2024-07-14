//
// Airthmetic Operators
let x = 6;
let y = 4;
let a = x + y; // Addition
let b = x - y; // Subtraction
let c = x * y; // Multiplication
let d = x / y; // Division
let e = x % y; // Remainder Value / Modulo
let f = x ** x; // Exponentiation

// UNARY OPERATORS
x++;
let g = x; // Incrementing
y--;
let h = y; // Decrementing

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

// ========================================================================================================================== //
// ========================================================================================================================== //

// Comparison Operators
// let x = 6;
// let y = 4;
console.log("x < y", x < y); // false
console.log("x > y", x > y); // true
console.log("x <= y", x <= y); // false
console.log("x >= y", x >= y); // true
console.log("x === y", x === y); // false
console.log("y === 'y'", y === "y"); // false
console.log("x === y", 1 === 2); // false
console.log("x !== y", x !== y); // true

// ========================================================================================================================== //
// ========================================================================================================================== //

// Logical Operators
// let x = 6;
// let y = 4;

// logical AND &&
// we need both value true
let cond1 = x > y; // true
let cond2 = x === 6; // true
console.log(cond1 && cond2); // true

// logical OR ||
// If atleast one value is true i will be givetrue
console.log(cond1 || cond2); // true

// Logical Not !
// i will opposite your value
console.log(!(6 < 5)); // true

// ========================================================================================================================== //
// ========================================================================================================================== //

// Expressions

// - Combinations of Operator and Operand is Expressions

// 5 + 20
// -> 5 and 20 is Operand
// -> + is Operator

// Operator Precedence

// -> Operator precedence describes the order in which operations are performed in an arithmetic expression. Multiplication (\*) and division (/) have higher precedence than addition (+) and subtraction (-).
