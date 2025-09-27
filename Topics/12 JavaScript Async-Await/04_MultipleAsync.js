// ============================================================================
// Topic: Multiple Async Functions
// Description: Calling multiple async functions sequentially or concurrently
// ============================================================================

function fetchUser() {
    return new Promise(resolve => setTimeout(() => resolve("User: Deep"), 1000));
}

function fetchPosts() {
    return new Promise(resolve => setTimeout(() => resolve("Posts: 5"), 1500));
}

// Sequential execution
async function getSequential() {
    const user = await fetchUser();
    const posts = await fetchPosts();
    console.log("Sequential:", user, posts); // User: Deep Posts: 5
}

getSequential();

// Concurrent execution using Promise.all
async function getConcurrent() {
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log("Concurrent:", user, posts); // User: Deep Posts: 5
}

getConcurrent();

// ============================================================================
// End of 04_MultipleAsync.js
// ============================================================================
