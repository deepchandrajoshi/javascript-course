// User will ask for number between 0 - 9 if the number below resolve otherwise reject
let belowFive = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10);
  if (num < 5) {
    return resolve();
  } else {
    return reject();
  }
});

belowFive
  .then(() => {
    console.log("Resolve");
  })
  .catch(() => {
    console.log("Reject");
  });
