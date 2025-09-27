// What it is:
// Shadow DOM allows you to encapsulate HTML/CSS, preventing styles from leaking.
// Useful for web components.

// Example:

const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
shadow.innerHTML = "<p>Shadow content</p>";
