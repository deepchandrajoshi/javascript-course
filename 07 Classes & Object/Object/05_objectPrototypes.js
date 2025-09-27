// Prototypes
// Every JavaScript object has a prototype. A prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function () {
  console.log("Hello, " + this.firstName + " " + this.lastName);
};

const john = new Person("John", "Doe");
john.greet(); // Output: Hello, John Doe
// In the example above, the greet method is added to the Person prototype, so all instances of Person can use this method.

// Prototype Chain
// When you access a property or method on an object, JavaScript will first look at the object itself. If it doesn't find it, it will look at the object's prototype, and so on, until it reaches the top of the prototype chain (Object.prototype).
console.log(john.toString()); // Output: [object Object]
// Here, toString is not defined on john or Person.prototype, but it is defined on Object.prototype, which is why it works.
