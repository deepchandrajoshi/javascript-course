// ============================================================================
// Topic: Async-Await with Promise
// Description: Using async-await to handle promises
// ============================================================================

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data);
}

getData(); // Data fetched successfully!

// ============================================================================
// End of 02_AsyncAwaitWithPromise.js
// ============================================================================
