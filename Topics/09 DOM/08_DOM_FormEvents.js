// ============================================================================
// Topic: Form Events
// ============================================================================

const form = document.querySelector("form");
const input = document.querySelector("input");

// Listen for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted! Value:", input.value);
});

// Input events
input.addEventListener("input", (e) => {
    console.log("Input changed:", e.target.value);
});

input.addEventListener("focus", () => {
    console.log("Input focused");
});

input.addEventListener("blur", () => {
    console.log("Input lost focus");
});

// ============================================================================
// End of 08_DOM_FormEvents.js
// ============================================================================
