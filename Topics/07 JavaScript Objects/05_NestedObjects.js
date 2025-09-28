// ============================================================================
// Topic: Nested Objects
// Description: Objects containing other objects or arrays
// ============================================================================

const student = {
    name: "Deep",
    age: 24,
    subjects: ["Math", "Science", "English"],
    address: {
        city: "Delhi",
        zip: 110001
    }
};

// Access nested object
console.log("City:", student.address.city);

// Access array inside object
console.log("First Subject:", student.subjects[0]);

// Adding a new nested property
student.address.country = "India";
console.log("Updated Address:", student.address);

// Iterating over nested array
student.subjects.forEach((sub, index) => {
    console.log(`Subject ${index + 1}: ${sub}`);
});

// ============================================================================
// End of 05_NestedObjects.js
// ============================================================================
