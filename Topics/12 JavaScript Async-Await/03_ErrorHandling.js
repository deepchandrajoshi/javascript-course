// ============================================================================
// Topic: Error Handling in Async-Await
// Description: Using try-catch for error handling
// ============================================================================

function fetchData(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Failed to fetch data!");
            } else {
                resolve("Data fetched successfully!");
            }
        }, 1000);
    });
}

async function getData() {
    try {
        const data = await fetchData(false);
        console.log("Success:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData(); // Success: Data fetched successfully!

async function getDataWithError() {
    try {
        const data = await fetchData(true);
        console.log("Success:", data);
    } catch (error) {
        console.log("Error:", error); // Error: Failed to fetch data!
    }
}

getDataWithError();

// ============================================================================
// End of 03_ErrorHandling.js
// ============================================================================
