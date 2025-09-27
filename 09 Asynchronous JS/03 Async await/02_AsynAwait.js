// API 1
async function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 4000);
  });
}

// API 2
async function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 4000);
  });
}

// FETCH THE DATA / API call
async function getData() {
  console.log("Fetching data 1...");
  await asyncFunc1(); // 1st call
  console.log("Fetching data 2...");
  await asyncFunc2(); // 2nd call
}
getData();
