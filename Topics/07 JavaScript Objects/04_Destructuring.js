// ============================================================================
// Topic: Object Destructuring
// Description: Extracting properties from objects into variables
// ============================================================================

const student = {
    name: "Deep",
    age: 24,
    cgpa: 8.2,
    address: {
        city: "Delhi",
        zip: 110001
    }
};

// Basic destructuring
const { name, age } = student;
console.log("Name:", name);
console.log("Age:", age);

// Destructuring with different variable names
const { cgpa: grade } = student;
console.log("CGPA as grade:", grade);

// Nested destructuring
const { address: { city, zip } } = student;
console.log("City:", city, "Zip:", zip);

// Destructuring in function parameters
function greet({ name, age }) {
    console.log(`Hello ${name}, Age: ${age}`);
}
greet(student);

// ============================================================================
// End of 04_Destructuring.js
// ============================================================================
