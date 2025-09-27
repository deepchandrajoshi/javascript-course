// What it is:
// Symbols: Unique identifiers for object properties.
// Iterators: Allow custom iteration using for...of loops.

// Example:

const sym = Symbol("id");
const obj = { [sym]: 123 };
console.log(obj[sym]); // 123

const iterable = [1,2,3];
const it = iterable[Symbol.iterator]();
console.log(it.next()); // { value: 1, done: false }
