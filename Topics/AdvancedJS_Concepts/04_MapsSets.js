// What it is:
// Map: Key-value pairs, keys can be any type.
// Set: Collection of unique values.
// WeakMap / WeakSet: Keys are objects and can be garbage collected.

// Example:

const map = new Map();
map.set("name", "Deep");
console.log(map.get("name")); // Deep

const set = new Set([1,2,3,3]);
console.log(set); // Set {1,2,3}
