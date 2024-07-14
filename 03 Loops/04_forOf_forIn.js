// forof lOOP
// defination=> forof loop work on index value of ARRAY
// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections)

// Syntax
/*
    for (let index of stringName/arrayName){
         // statement
    } 
*/

// Iterating over a Array
let cities = ["Almora", "delhi", "Kolkata", "Mumbai", "Dehradun"];

for (city of cities) {
  // city is the index value of cities
  console.log(city); // Almora, delhi, Kolkata, Mumbai, Dehradun
}

// Calculate array length with for..of
let myArray = ["deep", 12, "chandra", 34];
let arraySize = 0;
for (const iterator of myArray) {
  console.log(iterator);
  arraySize++;
}
console.log(`The arraySize is = ${arraySize}`);

// Iterating over a string
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"

// Calculate string length with for..of
let str = "Deep Chandra Joshi";
let size = 0;
for (let i of str) {
  // iteretor -> characters
  console.log(i); // characters of name
  size++;
}
console.log("string size is = ", size); // string size is =  18

// -------------------------------------------------------------------------------------------------------------------------//
// -------------------------------------------------------------------------------------------------------------------------//
// -------------------------------------------------------------------------------------------------------------------------//
// -------------------------------------------------------------------------------------------------------------------------//
// -------------------------------------------------------------------------------------------------------------------------//

// for...in
// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
// Syntax
/*
    for (let key in objectName){
        // statement
    } 
*/

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  // console.log(property); // a, b, c
  // console.log(object[property]); // 1, 2, 3
  // property is a,b,c and object[property] is 1, 2, 3
  console.log(`${property}: ${object[property]}`);
}

let student = {
  fullName: "Deep Chandra Joshi",
  age: 24,
  cgpa: 8.2,
  isPass: true,
};

for (let key in student) {
  console.log(`${key} : ${student[key]}`);
}

// with string
const person = { fname: "John", lname: "Doe", age: 25 };
let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text); // john Doe 25
