// Asynchronous js - when we will see below keyword in code thats mean code is async
// setTimeout
// setInterval
// Promise
// fetch
// axios
// XMLHttpRequest

// setTimeout(callback, timeInMS) // - callback is a callback function

console.log("Hey, I am before callback function.");
setTimeout(() => {
  console.log("Hey, I am in callback function and execude after 2 seconds.");
}, 2000);
console.log("Hey, I am after callback function.");
