// Synchronous Code - Code run line by line
console.log("Hey 1");
console.log("Hey 2");
console.log("Hey 3");
console.log("Hey 4");
console.log("Hey 5");
console.log("Hey 6");
console.log("Hey 7");

// Asynchronous js - when we will see below keyword in code thats mean code is async
// setTimeout
// setInterval
// Promise
// fetch
// axios
// XMLHttpRequest

console.log("Hey 1");
console.log("Hey 2");
console.log("Hey 3");
setTimeout(() => {
  console.log("Hey 4 after 2 seconds");
}, 2000);
console.log("Hey 5");
console.log("Hey 6");
console.log("Hey 7");
