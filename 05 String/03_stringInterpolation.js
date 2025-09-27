const myName = "John";
const age = 30;

// Traditional string concatenation
const message1 =
  "Hello, myName is " + myName + " and I am " + age + " years old.";

// String interpolation using template literals
const message2 = `Hello, myName is ${myName} and I am ${age} years old.`;

console.log(message2); // Output: Hello, myName is John and I am 30 years old.
console.log(message1); // Output: Hello, myName is John and I am 30 years old.
