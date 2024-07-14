// No Parameters
const greet = () => {
  console.log("Greetings from Deep Chandra Joshi");
};
console.log(greet());

//   ====================================================================================================  //

// Single Parameters
// const square = x => x * x;
const square = (x) => {
  return x * x;
};
console.log(square(4));

//   ====================================================================================================  //

// Multiple Parameters
const add = (a, b) => {
  return a + b;
};
console.log(add(12, 23));

//   ====================================================================================================  //

// Function body with multiple statement
const greetPerson = (name) => {
  const greeting = "Hello, " + name + "!";
  return greeting;
};
console.log(greetPerson("Deep Chandra Joshi"));

//   ====================================================================================================  //

// Returning Object Literals
const makePerson = (firstName, lastName) => ({
  first: firstName,
  last: lastName,
});
console.log(makePerson("John", "Doe"));

//   ====================================================================================================  //

// High Order Function and Callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
