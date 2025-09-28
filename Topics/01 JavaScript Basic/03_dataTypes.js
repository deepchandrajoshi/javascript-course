// ================================================================================================================== //
// ========================================= DATA TYPES IN JAVASCRIPT ============================================ //
// ================================================================================================================== //

// JavaScript has two main types of data types:
// 1️⃣ Primitive Data Types
// 2️⃣ Non-Primitive Data Types (Objects)

// ================================================================================================================== //
// 1️⃣ Primitive Data Types

// Primitive data types store single values and are immutable.
// There are 7 primitive types: Number, String, Boolean, Undefined, Null, BigInt, Symbol

let age = 24;                  // Number → numeric value
let firstName = "Deep";        // String → sequence of characters
let isFollow = true;           // Boolean → true or false
let x;                         // Undefined → variable declared but not assigned
let y = null;                  // Null → explicitly empty / no value
let a = BigInt("123");         // BigInt → for very large integers
let b = Symbol("Hello!");      // Symbol → unique identifier

console.log(typeof age);       // "number"
console.log(typeof firstName); // "string"
console.log(typeof isFollow);  // "boolean"
console.log(typeof x);         // "undefined"
console.log(typeof y);         // "object" → JavaScript quirk
console.log(typeof a);         // "bigint"
console.log(typeof b);         // "symbol"

// ================================================================================================================== //
// 2️⃣ Non-Primitive Data Types (Objects)

// Objects store collections of data and more complex entities
// Examples: Objects, Arrays, Functions, Dates, Maps, Sets, Typed Arrays, Promises, etc.

const student = {
  fullName: "Deep Chandra Joshi",
  age: 24,
  cgpa: 8.2,
  isPass: true,
};

// Accessing object properties
console.log(student.fullName);    // Dot notation → "Deep Chandra Joshi"
console.log(student["cgpa"]);     // Bracket notation → 8.2

// You can also modify or add properties
student.age = 25;
student.city = "New Delhi";
console.log(student);

// ================================================================================================================== //
// 3️⃣ Arrays (Special type of Object)

const numbers = [10, 20, 30, 40];
console.log(numbers[0]);   // 10
console.log(numbers.length); // 4

// ================================================================================================================== //
// 4️⃣ Functions (Special type of Object)

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Deep")); // "Hello, Deep!"

// ================================================================================================================== //
// 5️⃣ Summary of Data Types

/*
Primitive Data Types (Immutable, single values):
- Number
- String
- Boolean
- Undefined
- Null
- BigInt
- Symbol

Non-Primitive Data Types (Objects, mutable, can store collections):
- Object
- Array
- Function
- Date
- Map, Set
- Typed Arrays (Int32Array, Float32Array, etc.)
- Promise
*/

// ================================================================================================================== //
// ========================================= END OF DATA TYPES SECTION ============================================ //
// ================================================================================================================== //
