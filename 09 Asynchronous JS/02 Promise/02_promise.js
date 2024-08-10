let getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a Promise");
    resolve("success");
    // reject("error")
  });
};

let promise = getPromise();
promise.then(() => {
  console.log("promise fullfilled");
});

promise.catch(() => {
  console.log("promise failled");
});
