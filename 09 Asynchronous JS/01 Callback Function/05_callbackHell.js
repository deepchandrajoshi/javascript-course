// Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of doom)
// This style of programming becomes difficult to understand & manage

// Nesting of callback
// Example of callback hell

// API 1
function getData(callback) {
  setTimeout(() => {
    console.log("Fetched Data");
    callback();
  }, 1000);
}

// API 2
function processData(callback) {
  setTimeout(() => {
    console.log("Processed Data");
    callback();
  }, 1000);
}

// API 3
function saveData(callback) {
  setTimeout(() => {
    console.log("Data Saved");
    callback();
  }, 1000);
}

// API 4
function displayData(callback) {
  setTimeout(() => {
    console.log("Data Displayed");
    callback();
  }, 1000);
}

// This is how callback hell looks
getData(() => {
  processData(() => {
    saveData(() => {
      displayData(() => {
        console.log("All tasks completed");
      });
    });
  });
});
