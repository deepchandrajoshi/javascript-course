// ============================================================================
// Topic: Inheritance
// Description: Extending a class to create a subclass
// ============================================================================

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // call parent constructor
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }
}

const student = new Student("Deep", 24, "A");
student.greet(); // Hello, my name is Deep
student.study(); // Deep is studying in grade A

// ============================================================================
// End of 04_Inheritance.js
// ============================================================================
