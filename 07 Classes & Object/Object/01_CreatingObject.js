// Creating Objects
// You can create objects in several ways:

// 1. Object Literal Notation
// This is the most common and straightforward way to create objects.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.firstName + " " + this.lastName);
  },
};

person.greet(); // Output: Hello, John Doe

// 2. Using the Object Constructor
// You can also create an object using the Object constructor.
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;

console.log(car.make); // Output: Toyota

// 3. Using a Constructor Function
// For more complex objects, you might use a constructor function.
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greet = function () {
    console.log("Hello, " + this.firstName + " " + this.lastName);
  };
}

const john = new Person("John", "Doe", 30);
john.greet(); // Output: Hello, John Doe

// 4. Using class Syntax
// Since ECMAScript 2015 (ES6), JavaScript has a class syntax that simplifies the creation of objects through classes.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.firstName + " " + this.lastName);
  }
}

const Deep = new Person("Deep", "Joshi", 30);
john.greet(); // Output: Hello, John Doe
