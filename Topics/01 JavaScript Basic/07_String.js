// ================================================================================================================== //
// =========================================== STRINGS IN JAVASCRIPT ============================================= //
// ================================================================================================================== //

// Strings are sequences of characters used to represent text in JavaScript.

// ================================================================================================================== //
// 1️⃣ Creating Strings

let str1 = "Deep Chandra Joshi"; // Using double quotes
let str2 = "Deep Chandra Joshi"; // Using single quotes
let str3 = `Deep Chandra Joshi`; // Using backticks (Template Literals)

console.log(str1);
console.log(str2);
console.log(str3);

// ================================================================================================================== //
// 2️⃣ String Length

// Use .length property to get number of characters
console.log("Length of str1:", str1.length); // 18

// ================================================================================================================== //
// 3️⃣ Accessing Characters (String Indices)

// Strings are indexed like arrays (0-based)
console.log("First character:", str1[0]); // "D"
console.log("Second character:", str1[1]); // "e"
console.log("Third character:", str2[2]); // "e"

// ================================================================================================================== //
// 4️⃣ Template Literals (String Interpolation)

// Template literals allow embedding expressions inside strings
console.log(`The length of "${str1}" is ${str1.length}`);
// Output: The length of "Deep Chandra Joshi" is 18

// You can also embed variables and expressions
let age = 24;
console.log(`${str1} is ${age} years old.`); // Deep Chandra Joshi is 24 years old.

// ================================================================================================================== //
// 5️⃣ Escape Characters

// \n → New line
console.log("Deep\nChandra\nJoshi");

// \t → Tab (adds horizontal space)
console.log("Deep\tChandra\tJoshi");

// \\ → Backslash
console.log("This is a backslash: \\");

// \" → Double quote inside a string
console.log('He said, "Hello!"');

// \' → Single quote inside a string
console.log("It's a beautiful day.");

// NOTE: Each escape character counts as a single character in .length

// ================================================================================================================== //
// 6️⃣ Summary of String Basics

/*
1. Creation: "", '', ``
2. Length: str.length
3. Access: str[index] (0-based)
4. Template Literals: `${expression}`
5. Escape Characters: 
   - \n → newline
   - \t → tab
   - \\ → backslash
   - \" → double quote
   - \' → single quote
*/

// ================================================================================================================== //
// =========================================== END OF STRINGS SECTION ============================================ //
// ================================================================================================================== //
