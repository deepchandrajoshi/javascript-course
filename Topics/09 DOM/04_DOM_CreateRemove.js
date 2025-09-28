// ============================================================================
// Topic: Creating & Removing Elements
// ============================================================================

// Create new element
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div";
document.body.appendChild(newDiv); // Add to body

// Remove element
const removeDiv = document.querySelector(".remove-me");
if(removeDiv) {
    removeDiv.remove();
}

// Replace element
const replaceDiv = document.createElement("div");
replaceDiv.textContent = "I replaced old div";
const oldDiv = document.getElementById("old");
if(oldDiv) {
    document.body.replaceChild(replaceDiv, oldDiv);
}

// ============================================================================
// End of 04_DOM_CreateRemove.js
// ============================================================================
