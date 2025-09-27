// Simulate fetching Instagram ID / API 1
function fetchInstagramId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Deepchandrajoshii");
    }, 3000);
  });
}

// Simulate fetching Instagram password / API 2
function fetchInstagramPassword() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Deep@123");
    }, 3000);
  });
}

// Login page
function loginPage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success.");
    }, 3000);
  });
}

// Fetch the data / API CALLING
console.log("Fetching Instagram ID...");
let p1 = fetchInstagramId();
p1.then((id) => {
  console.log(`Fetched ID: ${id}`);
  // Continue to next API call
  console.log("Fetching Instagram password...");
  let p2 = fetchInstagramPassword();
  p2.then((password) => {
    console.log(`Fetched Password: ${password}`);
    // Continue to next API call
    console.log("Fetching Homepage...");
    let p3 = loginPage();
    p3.then(() => {
      console.log(`Welcome to HomePage`);
      // Continue to next API call if you want
    });
  });
});
