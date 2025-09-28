// ============================================================================
// Topic: Handling JSON
// Description: Converting between JSON string and JavaScript object
// ============================================================================

const user = {
    name: "Deep",
    age: 24,
    city: "Delhi"
};

// Convert object to JSON string
const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString); // '{"name":"Deep","age":24,"city":"Delhi"}'

// Convert JSON string back to object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject); // {name: "Deep", age: 24, city: "Delhi"}

// ============================================================================
// End of 04_HandlingJSON.js
// ============================================================================
