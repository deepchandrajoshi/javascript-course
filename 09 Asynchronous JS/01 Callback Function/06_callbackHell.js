// API 1
function asyncFunc1(callback) {
  setTimeout(() => {
    console.log("data 1");
    callback("success");
  }, 4000);
}

// API 2
function asyncFunc2(callback) {
  setTimeout(() => {
    console.log("data 2");
    callback("success");
  }, 4000);
}

// API 3
function asyncFunc3(callback) {
  setTimeout(() => {
    console.log("data 3");
    callback("success");
  }, 4000);
}

// API 4
function asyncFunc4(callback) {
  setTimeout(() => {
    console.log("data 4");
    callback("success");
  }, 4000);
}
// FETCH THE DATA
console.log("Fetching data 1...");
asyncFunc1((res1) => {
  console.log(res1);

  // After fetching data 1, fetch data 2...
  console.log("Fetching data 2...");
  asyncFunc2((res2) => {
    console.log(res2);
    console.log("Fetching data 3...");
    asyncFunc3((res2) => {
      console.log(res2);
      console.log("Fetching data 4...");
      asyncFunc4((res2) => {
        console.log(res2);
      });
    });
  });
});
