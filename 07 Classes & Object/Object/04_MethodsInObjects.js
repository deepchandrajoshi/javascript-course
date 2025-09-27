// Methods are functions stored as object properties.
const person = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log("Hello, " + this.firstName + " " + this.lastName);
  },
};

person.greet(); // Output: Hello, John Doe

// Within a method, this refers to the object on which the method was called.
