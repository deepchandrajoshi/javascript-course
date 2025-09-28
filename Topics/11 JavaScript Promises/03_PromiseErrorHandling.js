// ============================================================================
// Topic: Promise Error Handling
// Description: Catching errors in promises
// ============================================================================

const promise = new Promise((resolve, reject) => {
    const success = false;
    if (success) {
        resolve("Success!");
    } else {
        reject("Something went wrong!");
    }
});

// Handling errors using catch
promise
    .then(result => console.log(result))
    .catch(error => console.log("Caught Error:", error)); // Caught Error: Something went wrong!

// ============================================================================
// End of 03_PromiseErrorHandling.js
// ============================================================================
