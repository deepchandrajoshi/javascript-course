// ================================================================================================================== //
// ======================================= EQUALITY & TYPE COERCION IN JAVASCRIPT ================================= //
// ================================================================================================================== //

// JavaScript has two types of equality comparisons:
// 1️⃣ Loose Equality (==) → Performs type conversion if types are different
// 2️⃣ Strict Equality (===) → No type conversion, types must match

// ================================================================================================================== //
// 1️⃣ Examples of Loose vs Strict Equality

console.log(0 == false); // true
// Explanation: Loose equality converts false → 0, then compares → true

console.log(0 === false); // false
// Explanation: Strict equality checks type and value → Number !== Boolean → false

console.log(1 == "1"); // true
// Explanation: Loose equality converts string "1" → Number 1 → 1 == 1 → true

console.log(1 === "1"); // false
// Explanation: Strict equality → Number !== String → false

console.log(null == undefined); // true
// Explanation: Special case → null and undefined are loosely equal

console.log(null === undefined); // false
// Explanation: Strict equality → types are different → false

console.log("0" == false); // true
// Explanation: Loose equality converts '0' → 0 and false → 0 → 0 == 0 → true

console.log("0" === false); // false
// Explanation: Types are different → String !== Boolean → false

// ================================================================================================================== //
// 2️⃣ Key Takeaways

/*
1. Use == (loose equality) carefully — it performs automatic type conversion.
2. Use === (strict equality) to avoid unexpected results — compares both value and type.
3. null == undefined → true, but null === undefined → false
4. Strings like '0' or '1' can behave unexpectedly with == and boolean values.
5. Always prefer === in modern JavaScript for safer comparisons.
*/

// ================================================================================================================== //
// ====================================== END OF EQUALITY & COERCION SECTION ===================================== //
// ================================================================================================================== //
