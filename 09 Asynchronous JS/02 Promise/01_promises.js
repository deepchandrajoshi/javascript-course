// Promises = Promise is for "eventual" completion of task. It is an object in JS.
// it is a solution to callback hell

// let Promise1 = new Promise((resolve, reject)=>{...})
// resolve, reject is a callback provided by promises

// Creating a new promise
let myPromise = new Promise((resolve, reject) => {
  let condition = true;

  if (condition === true) {
    resolve("Promise resolved successfully!"); // Success
  } else {
    reject("Promise rejected!"); // Failure
  }
});

// Consuming the promise
myPromise
  .then((message) => {
    console.log(message); // This will run if the promise is resolved
  })
  .catch((error) => {
    console.log(error); // This will run if the promise is rejected
  })
  .finally(() => {
    console.log("Promise has been settled (resolved or rejected).");
  });
