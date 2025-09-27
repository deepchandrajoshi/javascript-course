// Promise Chain

// API 1
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 4000);
  });
}

// API 2
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 4000);
  });
}

// FETCH THE DATA
console.log("Fetching data 1...");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);
  // after fetch data 1 fetch data 2...
  console.log("Fetching data 2...");
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log(res);
  });
});
