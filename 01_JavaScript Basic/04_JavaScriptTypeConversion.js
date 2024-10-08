// ================================================================================================================== //
// ================================================================================================================== //

// =============== Converting Strings to Numbers ===============
// The global method Number() converts a variable (or a value) into a number.
// An empty string (like "") converts to 0.
// A non numeric string (like "John") converts to NaN (Not a Number).
Number(Math.PI); // 3.141592653589793
Number(" "); // 0
Number("John"); // NaN

// ================================================================================================================== //
// ================================================================================================================== //

// Converting Numbers to Strings
let x = 123;
String(x); // "123"
String(500); // "500"

// ================================================================================================================== //
// ================================================================================================================== //

// =============== Converting Dates to Numbers ===============
d = new Date();
Number(d); // returns 1720655775567

// ================================================================================================================== //
// ================================================================================================================== //

// =============== Converting Dates to String ===============
String(Date()); // returns 'Thu Jul 11 2024 05:25:13 GMT+0530 (India Standard Time)'
Date().toString(); // returns 'Thu Jul 11 2024 05:25:13 GMT+0530 (India Standard Time)'

// ================================================================================================================== //
// ================================================================================================================== //

//  =============== Converting Numbers to Dates ===============
var date = new Date(1942615200 * 1000);
console.log(date.toUTCString()); // Wed, 23 Jul 2031 23:20:00 GMT

// ================================================================================================================== //
// ================================================================================================================== //

//  =============== Converting Booleans to Numbers ===============
Number(false); // returns 0
Number(true); // returns 1

// ================================================================================================================== //
// ================================================================================================================== //

//  =============== Converting Numbers to Booleans ===============
let num = 1;
Boolean(num); // true

// ================================================================================================================== //
// ================================================================================================================== //
