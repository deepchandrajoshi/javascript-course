// ============================================================================
// Topic: Class Declaration
// Description: Basic class declaration and instantiation
// ============================================================================

// Class Declaration
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating object
const student1 = new Student("Deep", 24);
student1.greet(); // Output: Hello, my name is Deep and I am 24 years old.

// ============================================================================
// End of 01_ClassDeclaration.js
// ============================================================================
