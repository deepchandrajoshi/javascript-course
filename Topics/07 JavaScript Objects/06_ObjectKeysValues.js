// ============================================================================
// Topic: Object.keys, Object.values, Object.entries
// Description: Methods to get keys, values, and key-value pairs
// ============================================================================

const student = {
    name: "Deep",
    age: 24,
    cgpa: 8.2
};

// Object.keys - array of property names
const keys = Object.keys(student);
console.log("Keys:", keys); // ["name","age","cgpa"]

// Object.values - array of property values
const values = Object.values(student);
console.log("Values:", values); // ["Deep", 24, 8.2]

// Object.entries - array of [key, value] pairs
const entries = Object.entries(student);
console.log("Entries:", entries); // [["name","Deep"], ["age",24], ["cgpa",8.2]]

// Iterating over entries
entries.forEach(([key, value]) => {
    console.log(`${key} => ${value}`);
});

// ============================================================================
// End of 06_ObjectKeysValues.js
// ============================================================================
