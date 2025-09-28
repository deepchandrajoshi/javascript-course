// ============================================================================
// Topic: DOM Traversing
// ============================================================================

const list = document.querySelector("ul");
const firstChild = list.firstElementChild;
const lastChild = list.lastElementChild;
const parent = list.parentElement;

console.log("First child:", firstChild);
console.log("Last child:", lastChild);
console.log("Parent element:", parent);

// Next and previous sibling
console.log("Next sibling:", firstChild.nextElementSibling);
console.log("Previous sibling:", lastChild.previousElementSibling);

// ============================================================================
// End of 07_DOM_Traversing.js
// ============================================================================
