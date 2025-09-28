// What it is:
// Functions that can pause and resume execution.
// Useful for lazy evaluation or handling async flows.

// Example:

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next()); // {value:1, done:false}
console.log(gen.next()); // {value:2, done:false}
