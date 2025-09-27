// ============================================================================
// Topic: Fetch API - GET
// Description: Fetching data using fetch() and async-await
// ============================================================================

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log("Fetch GET Response:", data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchData();

// ============================================================================
// End of 02_FetchGET.js
// ============================================================================
