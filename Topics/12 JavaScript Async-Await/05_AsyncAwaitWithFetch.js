// ============================================================================
// Topic: Async-Await with Fetch API
// Description: Fetching data from an API using async-await
// ============================================================================

async function fetchAPIData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log("Fetched API Data:", data);
    } catch (error) {
        console.log("Error fetching API:", error);
    }
}

fetchAPIData();

// ============================================================================
// End of 05_AsyncAwaitWithFetch.js
// ============================================================================
