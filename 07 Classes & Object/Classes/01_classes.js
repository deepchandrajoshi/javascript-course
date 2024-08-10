// Class => Object generator

// In JavaScript, a class is a blueprint for creating objects with predefined properties and methods. It was introduced in ECMAScript 6 (ES6) and provides a more structured and clean way to create objects compared to traditional constructor functions.

// Defining a Class
// A class is defined using the class keyword followed by the class name. Inside the class, you define a constructor method and other methods.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an Instance of a Class
// You create an instance of a class using the new keyword.
const person1 = new Person("Alice", 30); // when we use new this is Constructer
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
