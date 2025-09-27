// ================================================================================================================== //
// ==========================================  OPERATORS IN JAVASCRIPT  ============================================== //
// ================================================================================================================== //

// 1️⃣ Arithmetic Operators
let x = 6;
let y = 4;

let add = x + y; // Addition
let sub = x - y; // Subtraction
let mul = x * y; // Multiplication
let div = x / y; // Division
let mod = x % y; // Modulus (Remainder)
let exp = x ** y; // Exponentiation (x to the power y)

console.log("Addition:", add);
console.log("Subtraction:", sub);
console.log("Multiplication:", mul);
console.log("Division:", div);
console.log("Modulus:", mod);
console.log("Exponentiation:", exp);

// ================================================================================================================== //
// 2️⃣ Unary Operators

x++; // Increment Operator (Increases value by 1)
y--; // Decrement Operator (Decreases value by 1)

console.log("Incremented x:", x);
console.log("Decremented y:", y);

// ================================================================================================================== //
// 3️⃣ Assignment Operators

let a = 10;
a += 5; // a = a + 5
a -= 2; // a = a - 2
a *= 3; // a = a * 3
a /= 2; // a = a / 2
a %= 3; // a = a % 3
a **= 2; // a = a ** 2

console.log("After Assignment Operations, a =", a);

// ================================================================================================================== //
// 4️⃣ Comparison Operators

x = 6;
y = 4;

console.log("x < y:", x < y); // false
console.log("x > y:", x > y); // true
console.log("x <= y:", x <= y); // false
console.log("x >= y:", x >= y); // true
console.log("x == y:", x == y); // false (checks value only)
console.log("x === y:", x === y); // false (checks value + type)
console.log("x != y:", x != y); // true
console.log("x !== y:", x !== y); // true

// Type Comparison Example
console.log("4 == '4':", 4 == "4"); // true (only value checked)
console.log("4 === '4':", 4 === "4"); // false (type checked)

// ================================================================================================================== //
// 5️⃣ Logical Operators

let cond1 = x > y; // true
let cond2 = x === 6; // true
let cond3 = y > 10; // false

// Logical AND (&&) → True only if both are true
console.log("cond1 && cond2:", cond1 && cond2); // true
console.log("cond1 && cond3:", cond1 && cond3); // false

// Logical OR (||) → True if at least one is true
console.log("cond1 || cond2:", cond1 || cond2); // true
console.log("cond1 || cond3:", cond1 || cond3); // true

// Logical NOT (!) → Reverses the value
console.log("!(x > y):", !(x > y)); // false
console.log("!(y > x):", !(y > x)); // true

// ================================================================================================================== //
// 6️⃣ Bitwise Operators (Used for binary operations)

let p = 5; // Binary: 0101
let q = 3; // Binary: 0011

console.log("Bitwise AND (p & q):", p & q); // 1 (0001)
console.log("Bitwise OR (p | q):", p | q); // 7 (0111)
console.log("Bitwise XOR (p ^ q):", p ^ q); // 6 (0110)
console.log("Bitwise NOT (~p):", ~p); // -6
console.log("Left Shift (p << 1):", p << 1); // 10 (1010)
console.log("Right Shift (p >> 1):", p >> 1); // 2 (0010)

// ================================================================================================================== //
// 7️⃣ Ternary Operator (Conditional Operator)
// Syntax: condition ? expressionIfTrue : expressionIfFalse

let age = 18;
let result = age >= 18 ? "You can vote" : "You cannot vote";
console.log(result);

// ================================================================================================================== //
// 8️⃣ Type Operators

let str = "JavaScript";
console.log("Type of str:", typeof str); // string
console.log("Is str instance of String:", str instanceof String); // false (primitive, not object)

let obj = new String("Hello");
console.log("obj instanceof String:", obj instanceof String); // true

// ================================================================================================================== //
// 9️⃣ Nullish Coalescing Operator (??)
// Returns the right-hand value if the left-hand value is null or undefined

let user;
console.log(user ?? "Guest"); // Guest

let username = "Deep";
console.log(username ?? "Guest"); // Deep

// ================================================================================================================== //
// 🔟 Optional Chaining Operator (?.)
// Used to safely access deeply nested properties

let person = {
  name: "Deep",
  address: { city: "Delhi" },
};

console.log(person?.name); // Deep
console.log(person?.address?.city); // Delhi
console.log(person?.contact?.phone); // undefined (no error)

// ================================================================================================================== //
// ⚡ Expressions & Operator Precedence

// Expression → Combination of Operands and Operators
// Example: 5 + 20  → (Operands: 5, 20 | Operator: +)

let z = 100 + 50 * 3; // Multiplication has higher precedence
console.log("z:", z); // 250

let n1 = (100 + 50) * 3; // Parentheses change the order
console.log("n1:", n1); // 450

let n2 = (300 / 50) * 3 + 50 - 2;
console.log("n2:", n2); // 66

// =================================================================================================================== //
// ==========================================  END OF OPERATORS SECTION  ============================================= //
// ================================================================================================================== //
