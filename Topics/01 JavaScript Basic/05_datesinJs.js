// ================================================================================================================== //
// ============================================= DATES IN JAVASCRIPT ============================================== //
// ================================================================================================================== //

// Dates in JavaScript are handled with the built-in Date object.
// You can create, read, modify, and format dates easily.

// ================================================================================================================== //
// 1️⃣ Creating / Initializing Dates

// Current date and time
let myDate = new Date();
console.log("Current Date & Time:", myDate);

// Specific date
let specificDate = new Date("2025-09-27T15:30:00");
console.log("Specific Date:", specificDate);

// ================================================================================================================== //
// 2️⃣ Getting Date Values (get Methods)

// Get components of the date
console.log("Year:", myDate.getFullYear()); // e.g., 2025
console.log("Month (0-11):", myDate.getMonth()); // 0 = Jan, 11 = Dec
console.log("Date:", myDate.getDate()); // Day of month (1-31)
console.log("Day (0-6):", myDate.getDay()); // Day of week (0 = Sunday)
console.log("Hours:", myDate.getHours());
console.log("Minutes:", myDate.getMinutes());
console.log("Seconds:", myDate.getSeconds());
console.log("Milliseconds:", myDate.getMilliseconds());
console.log("Time in ms since Jan 1, 1970:", myDate.getTime());
console.log("Timezone Offset (minutes):", myDate.getTimezoneOffset());

// ================================================================================================================== //
// 3️⃣ Date Conversions (toString / formatting)

// Convert date to string
console.log("toString():", myDate.toString());
console.log("toTimeString():", myDate.toTimeString());
console.log("toDateString():", myDate.toDateString());
console.log("toISOString():", myDate.toISOString());
console.log("toLocaleString():", myDate.toLocaleString());
console.log("toLocaleTimeString():", myDate.toLocaleTimeString());
console.log("toLocaleDateString():", myDate.toLocaleDateString());

// ================================================================================================================== //
// 4️⃣ Setting Date Values (set Methods)

// You can modify date components using set methods
myDate.setFullYear(2024);
myDate.setMonth(6); // July (0-based)
myDate.setDate(16); // Day of month
myDate.setHours(5);
myDate.setMinutes(18);
myDate.setSeconds(21);
myDate.setMilliseconds(764);
myDate.setTime(1721086041764); // Set time in milliseconds

console.log("Updated Date:", myDate);

// ================================================================================================================== //
// 5️⃣ Quick Summary of Important Date Methods

/*
Initialization:
- new Date()                → Current date & time
- new Date("YYYY-MM-DD")    → Specific date
- new Date(ms)              → From milliseconds

Get Methods:
- getFullYear(), getMonth(), getDate(), getDay()
- getHours(), getMinutes(), getSeconds(), getMilliseconds()
- getTime(), getTimezoneOffset()

Set Methods:
- setFullYear(), setMonth(), setDate()
- setHours(), setMinutes(), setSeconds(), setMilliseconds()
- setTime()

Conversion / Formatting:
- toString(), toTimeString(), toDateString(), toISOString()
- toLocaleString(), toLocaleTimeString(), toLocaleDateString()
*/

// ================================================================================================================== //
// ============================================= END OF DATES SECTION ============================================== //
// ================================================================================================================== //
