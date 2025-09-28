// ============================================================================
// Topic: Object Methods
// Description: Functions inside objects
// ============================================================================

const student = {
    name: "Deep",
    age: 24,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    incrementAge() {
        this.age++;
        console.log(`New Age: ${this.age}`);
    }
};

student.greet();         // Hello, my name is Deep
student.incrementAge();  // New Age: 25

// Using 'this' inside nested function
const student2 = {
    name: "Chandra",
    age: 26,
    greet: function() {
        setTimeout(() => {
            console.log(`Hello ${this.name}`); // Arrow function preserves 'this'
        }, 1000);
    }
};
student2.greet(); // Hello Chandra

// ============================================================================
// End of 03_ObjectMethods.js
// ============================================================================
