// ============================================================================
// Topic: Fetch API - POST
// Description: Sending data to server using fetch() POST method
// ============================================================================

async function postData() {
    const post = {
        title: "New Post",
        body: "This is a new post created via fetch POST",
        userId: 1
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(post)
        });

        const data = await response.json();
        console.log("POST Response:", data);
    } catch (error) {
        console.log("Error in POST:", error);
    }
}

postData();

// ============================================================================
// End of 03_FetchPOST.js
// ============================================================================
