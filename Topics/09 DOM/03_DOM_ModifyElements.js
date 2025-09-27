// ============================================================================
// Topic: Modifying DOM Elements
// ============================================================================

const title = document.getElementById("title");

// Change text
title.textContent = "Hello, Deep!";
title.innerHTML = "<em>Hello, Deep!</em>";

// Change value (for inputs)
const input = document.querySelector("input");
input.value = "Type here";

// Change style
title.style.color = "red";
title.style.fontSize = "30px";

// Set and get attributes
title.setAttribute("data-custom", "123");
console.log(title.getAttribute("data-custom")); // 123

// ============================================================================
// End of 03_DOM_ModifyElements.js
// ============================================================================
