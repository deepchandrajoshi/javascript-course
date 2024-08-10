// Accessing and Modifying Object Properties
// 1. Dot Notation
// You can access and modify properties using dot notation.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(person.firstName); // Output: John
person.age = 31;
console.log(person.age); // Output: 31

// 2. Bracket Notation
// You can also use bracket notation, which is useful when property names contain spaces or are dynamic.
const person = {
  "first name": "John",
  "last name": "Doe",
  age: 30,
};

console.log(person["first name"]); // Output: John
person["age"] = 31;
console.log(person["age"]); // Output: 31
