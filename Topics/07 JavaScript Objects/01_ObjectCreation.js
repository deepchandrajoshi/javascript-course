// ============================================================================
// Topic: Object Creation
// Description: Different ways to create objects in JavaScript
// ============================================================================

// Using object literal
const student1 = {
    name: "Deep",
    age: 24,
    isPass: true
};
console.log("Object Literal:", student1);

// Using Object constructor
const student2 = new Object();
student2.name = "Chandra";
student2.age = 26;
student2.isPass = false;
console.log("Object Constructor:", student2);

// Using Object.create
const studentProto = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
const student3 = Object.create(studentProto);
student3.name = "John";
student3.age = 22;
student3.greet(); // Hello, my name is John

// ============================================================================
// End of 01_ObjectCreation.js
// ============================================================================
