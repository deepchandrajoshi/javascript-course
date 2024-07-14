// String Methods
// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length; // 26
let char1 = text.charAt(0); // A
let char2 = text.charCodeAt(0); // 65
let letter1 = text.at(2); // C
let letter2 = text[2]; // C

//   ====================================================================================================  //

let Fruits = "Apple, banana, Kiwi";
let part1 = text.slice(7, 13); // HIJKLM
let part2 = text.slice(7); // HIJKLMNOPQRSTUVWXYZ
let part3 = text.slice(-12); // OPQRSTUVWXYZ
let part4 = text.slice(-12, -6); // OPQRST

//   ====================================================================================================  //

let Name = "Deep, Arjun, Neeraj";
let part5 = Name.substring(7, 13); // rjun,
let part6 = Name.substring(7, 6); // A

//   ====================================================================================================  //

let text1 = "Hello World!";
let text2 = text1.toUpperCase(); // HELLO WORLD!
let text3 = text1.toLowerCase(); // hello world!

//   ====================================================================================================  //

let word1 = "Hello";
let word2 = "World";
let word3 = word1.concat(" ", word2); // Hello World ( we can also concat with word1 + word2.)

//   ====================================================================================================  //

let words = "      Hello World!      ";
let words1 = words.trim(); // Hello World!
let words2 = words.trimStart(); // Hello World!....
let words3 = words.trimEnd(); //  ....Hello World!

//   ====================================================================================================  //

let num = "5";
let padded1 = text.padStart(4, "0"); // 0005
let padded2 = text.padStart(4, "x"); // xxx5
let padded3 = text.padEnd(4, "0"); // 5000
let padded4 = text.padEnd(4, "x"); // 5xxx

//   ====================================================================================================  //

let text5 = "Hello world!";
let result = text5.repeat(2); // Hello world!Hello world!

//   ====================================================================================================  //

let text6 = "Please visit Microsoft!";
let newText = text6.replace("Microsoft", "W3Schools"); // Please visit W3Schools!

//   ====================================================================================================  //

let text7 = "Hello";
const myArr = text7.split(""); // [ 'H', 'e', 'l', 'l', 'o' ]

//   ====================================================================================================  //
// Notes:-
let str = "deep chandra joshi";
newStr = str.toUpperCase();
console.log(newStr); // Output: "DEEP CHANDRA JOSHI"
console.log(str); // deep chandra joshi ( Original string can't be change )
