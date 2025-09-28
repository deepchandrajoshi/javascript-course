// ============================================================================
// Topic: XMLHttpRequest
// Description: Sending a simple GET request using XMLHttpRequest
// ============================================================================

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log("XHR GET Response:", data);
    } else {
        console.log("Error:", xhr.status);
    }
};

xhr.onerror = function () {
    console.log("Request failed");
};

xhr.send();

// ============================================================================
// End of 01_XMLHttpRequest.js
// ============================================================================
