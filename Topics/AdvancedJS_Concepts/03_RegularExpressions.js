// What it is:
// Regular expressions (RegEx) are patterns to match strings.
// Useful for validation, like email, phone numbers, passwords.

// Example:

const email = "test@example.com";
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(pattern.test(email)); // true
