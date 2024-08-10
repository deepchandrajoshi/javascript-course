// Simulate fetching Instagram ID / API 1
function fetchInstagramId(callback) {
  setTimeout(() => {
    callback("Deepchandrajoshii");
  }, 3000);
}

// Simulate fetching Instagram password / API 2
function fetchInstagramPassword(callback) {
  setTimeout(() => {
    callback("Deep@123");
  }, 3000);
}

// Login page
function loginPage(callback) {
  setTimeout(() => {
    callback("success.");
  }, 3000);
}

// Fetch the data / API CALLING
console.log("Fetching Instagram ID...");
fetchInstagramId((id) => {
  console.log(`Fetched ID: ${id}`);

  // Continue to next API call if you want
  console.log("Fetching Instagram password...");
  fetchInstagramPassword((password) => {
    console.log(`Fetched Password: ${password}`);

    // Continue to next API call if you want
    console.log("Fetching Homepage...");
    loginPage(() => {
      console.log("Welcome to HomePage");

      // Continue to next API call if you want
    });
  });
});
