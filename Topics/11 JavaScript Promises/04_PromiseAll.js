// ============================================================================
// Topic: Promise.all
// Description: Wait for multiple promises to resolve
// ============================================================================

const p1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 1500));

Promise.all([p1, p2, p3])
    .then(values => console.log("Promise.all results:", values)) // [1,2,3]
    .catch(error => console.log(error));

// ============================================================================
// End of 04_PromiseAll.js
// ============================================================================
