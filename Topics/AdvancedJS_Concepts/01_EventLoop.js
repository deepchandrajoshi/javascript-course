// What it is:
// JavaScript is single-threaded, but it can handle asynchronous operations using the event loop.
// The event loop manages callbacks, promises, timers, and browser events.

// Key concepts:
// Call stack: Where functions are executed in order.
// Web APIs / Browser APIs: Asynchronous tasks like setTimeout, fetch.
// Callback queue / Microtasks: Promises (.then) go into microtasks.
// Macrotasks: setTimeout, setInterval go into macrotasks.

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
// Output: Start, End, Promise, Timeout
