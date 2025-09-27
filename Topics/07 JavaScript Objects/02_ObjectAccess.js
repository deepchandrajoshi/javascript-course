// ============================================================================
// Topic: Object Access
// Description: Accessing object properties using dot and bracket notation
// ============================================================================

const student = {
    name: "Deep",
    age: 24,
    cgpa: 8.2
};

// Dot notation
console.log("Name:", student.name);
console.log("Age:", student.age);

// Bracket notation
console.log("CGPA:", student["cgpa"]);

// Dynamic property access
const key = "name";
console.log("Dynamic Access:", student[key]);

// Nested object
const studentDetails = {
    name: "Chandra",
    address: {
        city: "Delhi",
        zip: 110001
    }
};
console.log("City:", studentDetails.address.city);

// ============================================================================
// End of 02_ObjectAccess.js
// ============================================================================
