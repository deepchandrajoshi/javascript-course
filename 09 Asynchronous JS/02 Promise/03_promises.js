//
let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No, random number not supported");
  } else {
    setTimeout(() => {
      console.log("Yes, I am done");
      resolve("Success");
    }, 3000);
  }
});

prom1
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
