let str = "  Deep Chandra Joshi  ";
console.log("Original String:", `"${str}"`);
// String Methods
// 1️⃣ Length
console.log("Length:", str.length); // ✅ Gives total length (including spaces)

// 2️⃣ Case Conversion
console.log("toUpperCase():", str.toUpperCase());
console.log("toLowerCase():", str.toLowerCase());

// 3️⃣ Trimming
console.log("trim():", `"${str.trim()}"`); // ✅ Removes whitespace from both sides
console.log("trimStart():", `"${str.trimStart()}"`);
console.log("trimEnd():", `"${str.trimEnd()}"`);

// 4️⃣ Extracting
console.log("slice(2, 6):", str.slice(2, 6));
console.log("substring(2, 6):", str.substring(2, 6));

// 5️⃣ Searching
console.log("indexOf('a'):", str.indexOf("a"));
console.log("lastIndexOf('a'):", str.lastIndexOf("a"));
console.log("includes('Deep'):", str.includes("Deep"));
console.log("startsWith('  D'):", str.startsWith("  D"));
console.log("endsWith('shi  '):", str.endsWith("shi  "));

// 6️⃣ Replace
console.log("replace('Deep', 'Mr. Deep'):", str.replace("Deep", "Mr. Deep"));
console.log("replaceAll('a', '@'):", str.replaceAll("a", "@"));

// 7️⃣ Split & Join
let splitStr = str.trim().split(" ");
console.log("split(' '):", splitStr);
console.log("join('-'):", splitStr.join("-"));

// 8️⃣ Repeat & Pad
console.log("repeat(3):", "Hi".repeat(3));
console.log("padStart(5, '0'):", "5".padStart(5, "0"));
console.log("padEnd(5, '0'):", "5".padEnd(5, "0"));

// 9️⃣ Character Access
console.log("charAt(2):", str.charAt(2));
console.log("charCodeAt(0):", str.charCodeAt(0));
console.log("at(-1):", str.at(-1));

// 🔟 Template Literal (String Interpolation)
let name = "Deep";
let skill = "JavaScript";
console.log(`Hello, my name is ${name} and I love ${skill}.`);
