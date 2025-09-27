// ============================================================================
// Topic: Promise Chaining
// Description: Chaining multiple then() calls
// ============================================================================

const promise = new Promise((resolve, reject) => {
    resolve(5);
});

promise
    .then(value => {
        console.log("Initial value:", value); // 5
        return value * 2;
    })
    .then(value => {
        console.log("After multiplication:", value); // 10
        return value + 3;
    })
    .then(value => {
        console.log("After addition:", value); // 13
    })
    .catch(error => console.log(error));

// ============================================================================
// End of 02_PromiseChaining.js
// ============================================================================
