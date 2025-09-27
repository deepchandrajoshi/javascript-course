// ================================================================================================================== //
// ======================================= TYPE CONVERSIONS IN JAVASCRIPT =========================================== //
// ================================================================================================================== //

// Type conversion means changing one data type into another.
// JavaScript can convert data types manually or automatically (called Type Coercion).

// ================================================================================================================== //
// 1️⃣ Converting Strings to Numbers

// The global method Number() converts a variable (or a value) into a number.
// ✅ Notes:
// - Empty string ("") → 0
// - Non-numeric string ("John") → NaN (Not a Number)

console.log(Number("10"));     // 10
console.log(Number("10.5"));   // 10.5
console.log(Number(""));       // 0
console.log(Number("John"));   // NaN
console.log(Number(Math.PI));  // 3.141592653589793

// ================================================================================================================== //
// 2️⃣ Converting Numbers to Strings

let x = 123;
console.log(String(x));     // "123"
console.log(String(500));   // "500"
console.log((456).toString()); // "456"

// ================================================================================================================== //
// 3️⃣ Converting Dates to Numbers

// Number(new Date()) returns the number of milliseconds since January 1, 1970 (Unix Time)
let d = new Date();
console.log(Number(d)); // Example: 1720655775567

// ================================================================================================================== //
// 4️⃣ Converting Dates to Strings

console.log(String(Date()));      // Example: "Thu Jul 11 2024 05:25:13 GMT+0530 (India Standard Time)"
console.log(Date().toString());   // Same as above

let dateObj = new Date();
console.log(dateObj.toString());  // "Sat Sep 27 2025 15:55:00 GMT+0530 (India Standard Time)"

// ================================================================================================================== //
// 5️⃣ Converting Numbers to Dates

// You can pass milliseconds to new Date() to get a readable date.
// Example: 1942615200 seconds → convert to milliseconds (* 1000)
let date = new Date(1942615200 * 1000);
console.log(date.toUTCString()); // "Wed, 23 Jul 2031 23:20:00 GMT"

// ================================================================================================================== //
// 6️⃣ Converting Booleans to Numbers

console.log(Number(false)); // 0
console.log(Number(true));  // 1

// ================================================================================================================== //
// 7️⃣ Converting Numbers to Booleans

let num1 = 1;
let num2 = 0;

console.log(Boolean(num1)); // true  → (any non-zero number is true)
console.log(Boolean(num2)); // false → (0 is false)

// ================================================================================================================== //
// 8️⃣ Converting Strings to Booleans

console.log(Boolean(""));       // false (empty string)
console.log(Boolean("Hello"));  // true  (non-empty string)

// ================================================================================================================== //
// 9️⃣ Converting Booleans to Strings

console.log(String(true));   // "true"
console.log(String(false));  // "false"

// ================================================================================================================== //
// 🔟 Summary of Type Conversions

/*
Number("10")      ➜ 10
String(123)       ➜ "123"
Number(new Date())➜ 1720655775567
String(Date())    ➜ "Thu Jul 11 2024 ..."
Boolean(1)        ➜ true
Boolean(0)        ➜ false
Number(true)      ➜ 1
Number(false)     ➜ 0
*/

// ================================================================================================================== //
// ============================================  END OF TYPE CONVERSIONS  ============================================ //
// ================================================================================================================== //
