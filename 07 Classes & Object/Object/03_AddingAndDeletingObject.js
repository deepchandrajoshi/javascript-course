// Adding and Deleting Properties
// Adding Properties
const person = {
  firstName: "John",
  lastName: "Doe",
};

person.age = 30;
console.log(person.age); // Output: 30

// Deleting Properties
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

delete person.age;
console.log(person.age); // Output: undefined
