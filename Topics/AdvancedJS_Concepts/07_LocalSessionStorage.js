// What it is:
// Browser storage APIs:
//      localStorage: persists even after browser closes.
//      sessionStorage: clears after tab closes.
// Used to store small amounts of data like tokens, preferences.

// Example:

localStorage.setItem("name", "Deep");
console.log(localStorage.getItem("name")); // Deep
localStorage.removeItem("name");
