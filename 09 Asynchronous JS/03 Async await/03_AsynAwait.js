// Simulate fetching Instagram ID / API 1
function fetchInstagramId() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Deepchandrajoshii");
    }, 3000);
  });
}

// Simulate fetching Instagram password / API 2
function fetchInstagramPassword() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Deep@123");
    }, 3000);
  });
}

// Login page
function loginPage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success.");
    }, 3000);
  });
}

// Async function to fetch data
async function fetchData() {
  try {
    console.log("Fetching Instagram ID...");
    const id = await fetchInstagramId();
    console.log(`Fetched ID: ${id}`);

    console.log("Fetching Instagram password...");
    const password = await fetchInstagramPassword();
    console.log(`Fetched Password: ${password}`);

    console.log("Fetching Homepage...");
    await loginPage();
    console.log("Welcome to HomePage");

    // Continue to next API call if needed
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the async function
fetchData();
