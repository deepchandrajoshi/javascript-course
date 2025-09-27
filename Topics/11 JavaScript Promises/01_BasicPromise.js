// ============================================================================
// Topic: Basic Promise
// Description: Creating a simple promise
// ============================================================================

const myPromise = new Promise((resolve, reject) => {
    const success = true; // Change to false to test reject
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Consuming the promise
myPromise
    .then(message => console.log(message)) // Promise resolved successfully!
    .catch(error => console.log(error));   // Only if rejected

// ============================================================================
// End of 01_BasicPromise.js
// ============================================================================
