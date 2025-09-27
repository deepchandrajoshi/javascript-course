// ============================================================================
// Topic: DOM Events
// ============================================================================

const btn = document.querySelector("#myBtn");

btn.addEventListener("click", () => {
    alert("Button clicked!");
});

// Mouseover event
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "yellow";
});

// Mouseout event
btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "";
});

// ============================================================================
// End of 05_DOM_Events.js
// ============================================================================
