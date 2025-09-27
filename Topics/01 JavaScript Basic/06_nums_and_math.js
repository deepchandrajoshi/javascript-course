// ================================================================================================================== //
// ======================================= NUMBERS AND MATH IN JAVASCRIPT =========================================== //
// ================================================================================================================== //

// In JavaScript, numbers are always stored as floating-point values (64-bit precision).
// There are two main ways to define numbers.

// ================================================================================================================== //
// 1️⃣ Defining Numbers

const score = 400;
console.log(score); // 400 → normal number

// Another way: using the Number object
const balance = new Number(100);
console.log(balance); // [Number: 100]

// ================================================================================================================== //
// 2️⃣ Number Methods

// ✅ toString() → Converts number to string
console.log(balance.toString());          // "100"
console.log(balance.toString().length);   // 3 → length of the string "100"

// ✅ toFixed(n) → Formats number to 'n' decimal places
console.log(balance.toFixed(1));          // "100.0"

// ✅ toPrecision(n) → Returns number with a specified total length (rounds automatically)
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));  // "123.9"

// ✅ toLocaleString() → Converts number into a string with local number formatting
const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-US")); // "1,000,000" (US format)
console.log(hundreds.toLocaleString("en-IN")); // "10,00,000" (Indian format)

// ================================================================================================================== //
// 3️⃣ Math Object in JavaScript

// The Math object provides built-in methods for mathematical operations.

console.log(Math); // Math is a global object with many methods

// ================================================================================================================== //
// 4️⃣ Common Math Methods

console.log(Math.abs(-4));     // 4 → absolute value (removes negative sign)
console.log(Math.round(4.6));  // 5 → rounds to nearest integer
console.log(Math.ceil(4.2));   // 5 → rounds UP
console.log(Math.floor(4.9));  // 4 → rounds DOWN

console.log(Math.min(4, 3, 6, 8)); // 3 → smallest number
console.log(Math.max(4, 3, 6, 8)); // 8 → largest number

// ================================================================================================================== //
// 5️⃣ Math.random()

// Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Example: 0.735
console.log(Math.random() * 10 + 1); // Random number between 1 and 11 (float)

// ✅ To get a random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// ✅ To get a random integer between any range (min and max)
const min = 10;
const max = 20;

// Formula: Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Example: 13

// ================================================================================================================== //
// 6️⃣ Other Useful Math Methods (for learning purpose)

console.log(Math.sqrt(49));   // 7 → square root
console.log(Math.pow(2, 3));  // 8 → 2 raised to the power 3
console.log(Math.trunc(4.9)); // 4 → removes decimal (no rounding)
console.log(Math.sign(-10));  // -1 → sign of number (-1 for negative, 1 for positive, 0 for zero)
console.log(Math.cbrt(27));   // 3 → cube root

// ================================================================================================================== //
// 🔹 Summary of Math Methods 🔹
/*
Math.abs(x)      → Absolute value
Math.round(x)    → Round to nearest integer
Math.ceil(x)     → Round UP
Math.floor(x)    → Round DOWN
Math.min(...)    → Smallest number
Math.max(...)    → Largest number
Math.random()    → Random number (0–1)
Math.sqrt(x)     → Square root
Math.pow(x, y)   → x raised to y
Math.trunc(x)    → Remove decimals
Math.sign(x)     → Returns -1, 0, or 1
Math.cbrt(x)     → Cube root
*/

// ================================================================================================================== //
// ============================================= END OF NUMBERS & MATH ============================================== //
// ================================================================================================================== //
