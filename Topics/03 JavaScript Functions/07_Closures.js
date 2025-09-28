// ============================================================================
// Topic: Closures
// Description: Function that "remembers" its outer variables
// ============================================================================

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log("Count:", count);
  };
}

const counter = outer();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3

// Closure can maintain private variables
function createCounter(start = 0) {
  let count = start;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const myCounter = createCounter(5);
console.log(myCounter.increment()); // 6
console.log(myCounter.increment()); // 7
console.log(myCounter.decrement()); // 6
console.log(myCounter.getCount()); // 6

// ============================================================================
// End of 07_Closures.js
// ============================================================================
