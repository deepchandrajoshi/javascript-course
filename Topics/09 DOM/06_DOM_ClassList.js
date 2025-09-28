// ============================================================================
// Topic: Manipulating Classes
// ============================================================================

const box = document.querySelector(".box");

// Add class
box.classList.add("active");

// Remove class
box.classList.remove("inactive");

// Toggle class
box.classList.toggle("highlight");

// Check if class exists
console.log(box.classList.contains("active")); // true

// ============================================================================
// End of 06_DOM_ClassList.js
// ============================================================================
