// ============================================================================
// Topic: Basic Async Function
// Description: Declaring and using an async function
// ============================================================================

async function greet() {
    return "Hello, Deep!";
}

// Calling async function returns a promise
greet()
    .then(message => console.log(message)) // Hello, Deep!
    .catch(error => console.log(error));

// Or using await (inside another async function)
(async () => {
    const message = await greet();
    console.log("Using await:", message); // Hello, Deep!
})();

// ============================================================================
// End of 01_BasicAsync.js
// ============================================================================
