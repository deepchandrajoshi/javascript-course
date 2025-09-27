// Their is 2 types of data types

// 1. Primitive Data type
// Number, String, Boolean, Underfined, Null, BigInt, Symbol

let age = 24;
let firstName = "Deep";
let isFollow = true;
let x;
let y = null;
let a = BigInt("123");
let b = Symbol("Hello!");

// 2. Non-Primitive Data Type
// Object ( Collection of values ) -> (( Arrey, Function, dates, maps, sets, intarrays, floatarrays, promises, and more. ))
const student = {
  fullName: "Deep Chandra Joshi",
  age: 24,
  cgpa: 8.2,
  isPass: true,
};
// 2 Methods to access Keys of Object
console.log(student["fullName"]);
console.log(student.cgpa);
