// ============================================================================
// Topic: Attributes and Data Attributes
// ============================================================================

const card = document.querySelector(".card");

// Get and set regular attributes
console.log("Class:", card.getAttribute("class"));
card.setAttribute("id", "card1");

// Data attributes
console.log("Data-id:", card.dataset.id); // HTML: data-id="101"
card.dataset.role = "admin"; // Set new data attribute
console.log("New Data-role:", card.dataset.role); // admin

// ============================================================================
// End of 10_DOM_Attributes.js
// ============================================================================
