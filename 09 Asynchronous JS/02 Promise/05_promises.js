function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId); // Corrected variable name
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

// Example usage
getData(123, () => {
  console.log("Fetching next data");
}).then((result) => {
  console.log(result); // Logs "success" after 2 seconds
});
