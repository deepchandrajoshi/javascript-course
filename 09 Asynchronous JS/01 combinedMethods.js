// API 1
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

// API CALLING WITH DIFFERENT METHODS / fetch the data with Async-await, Promise chain and callback hell

// callback hell
// console.log("getting data 1...");
// getData(1, () => {
//   console.log("getting data 2...");
//   getData(2, () => {
//     console.log("getting data 3...");
//     getData(3, () => {
//       console.log("getting data 4...");
//     });
//   });
// });

// Promise chain
console.log("getting data 1...");
getData(1)
  .then((res) => {
    console.log("getting data 2...");
    return getData(2);
  })
  .then((res) => {
    console.log("getting data 3...");
    return getData(3);
  })
  .then((res) => {
    console.log("getting data 4...");
    return getData(4);
  });

// Async-await
// async function getAllData() {
//   console.log("getting data 1...");
//   await getData(1);
//   console.log("getting data 2...");
//   await getData(2);
//   console.log("getting data 3...");
//   await getData(3);
//   console.log("getting data 4...");
//   await getData(4);
// }
// getAllData();
