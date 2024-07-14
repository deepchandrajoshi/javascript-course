// Dates

let myDate = new Date();
console.log(myDate); // Sat Jul 06 2024 07:44:10 GMT+0530 (India Standard Time) in chrome but js => 2024-07-06T02:15:08.032Z
console.log(myDate.toString()); // Sat Jul 06 2024 07:45:08 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sat Jul 06 2024
console.log(myDate.toLocaleString()); // 6/7/2024, 7:46:29 am
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23); // 23/1/2023, 12:00:00 am
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // 23/1/2023, 5:03:00 am
// let myCreatedDate = new Date("2023-01-14"); // 14/1/2023, 5:30:00 am
let myCreatedDate = new Date("01-14-2023"); // 14/1/2023, 12:00:00 am
console.log(myCreatedDate.toLocaleString()); //
// let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// // `${newDate.getDay()} and the time `

// newDate.toLocaleString("default", {
//   weekday: "long",
// });
