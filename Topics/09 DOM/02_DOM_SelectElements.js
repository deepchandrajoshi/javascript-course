// ============================================================================
// Topic: Selecting DOM Elements
// ============================================================================

// By ID
const header = document.getElementById("header");
console.log(header);

// By Class
const items = document.getElementsByClassName("item");
console.log(items);

// By Tag
const divs = document.getElementsByTagName("div");
console.log(divs);

// querySelector (first match)
const firstItem = document.querySelector(".item");
console.log(firstItem);

// querySelectorAll (all matches)
const allItems = document.querySelectorAll(".item");
console.log(allItems);

// ============================================================================
// End of 02_DOM_SelectElements.js
// ============================================================================
