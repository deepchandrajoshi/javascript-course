// Types of Dates

// Initialization
let myDate = new Date();
console.log(myDate); // 2024-07-15T23:22:03.737Z

// get Methods
myDate.getFullYear(); // 2024
myDate.getMonth(); // 6
myDate.getDate(); // 16
myDate.getDay(); // 2
myDate.getHours(); // 4
myDate.getMinutes(); // 57
myDate.getSeconds(); // 21
myDate.getMilliseconds(); // 764
myDate.getTime(); // 1721086041764
myDate.getTimezoneOffset(); // -330

// Conversions
myDate.toString; // Tue Jul 16 2024 05:01:30 GMT+0530 (India Standard Time)
myDate.toTimeString; // 05:01:30 GMT+0530
myDate.toDateString; // Tue Jul 16 2024
myDate.toISOString; // 2024-07-15T23:43:04.838Z
myDate.toLocaleString; // 16/7/2024, 5:12:39 am
myDate.toLocaleTimeString; // 5:13:27 am
myDate.toLocaleDateString; // 16/7/2024

// set Methods
myDate.setFullYear(2024);
myDate.setMonth(6);
myDate.setDate(16);
myDate.setHours(5);
myDate.setMinutes(18);
myDate.setSeconds(21);
myDate.setMilliseconds(764);
myDate.setTime(1721086041764);
