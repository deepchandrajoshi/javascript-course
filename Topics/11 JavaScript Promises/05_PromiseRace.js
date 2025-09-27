// ============================================================================
// Topic: Promise.race
// Description: Resolves/rejects as soon as one promise resolves/rejects
// ============================================================================

const p1 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Second"), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve("Third"), 1500));

Promise.race([p1, p2, p3])
    .then(value => console.log("Promise.race result:", value)) // First
    .catch(error => console.log(error));

// ============================================================================
// End of 05_PromiseRace.js
// ============================================================================
