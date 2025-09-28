// ============================================================================
// Topic: Fetch API with Error Handling
// Description: Using try-catch and response.ok to handle errors
// ============================================================================

async function fetchWithError() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.log("Caught Error:", error.message); // Caught Error: HTTP error! Status: 404
    }
}

fetchWithError();

// ============================================================================
// End of 05_FetchWithErrorHandling.js
// ============================================================================
