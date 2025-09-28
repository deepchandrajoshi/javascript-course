// 📘 JavaScript Variables Notes
// ✅ Variables are Containers for Storing Data
// Variables hold data values that can be used and manipulated in a program.
// In JavaScript, variables can be declared using var, let, or const.

// 🟢 var, let, const Differences
// 🔹 var (Old way: 1995–2015)
// Function-scoped (NOT block-scoped).
// Can be re-declared and updated.
// Hoisted → moved to the top but initialized as undefined.
// Binds to this (can cause unexpected issues).
// 👉 Not recommended in modern JavaScript.

// 🔹 let (ES6, 2015)
// Block-scoped.
// Can be updated but not re-declared in the same scope.
// Hoisted but not initialized (Temporal Dead Zone).
// Does not bind to this.
// 👉 Use when you need a mutable variable.

// 🔹 const (ES6, 2015)
// Block-scoped.
// Must be initialized at the time of declaration.
// Cannot be re-assigned, but objects/arrays declared with const can be mutated.
// 👉 Use for values that should never change.

// ====================================================================================================================
// ====================================================================================================================

// 🔥 var vs let vs const in JavaScript

// 1. Scope (Where the variable is accessible)
// var → function scope (or global if outside function).
// let & const → block scope (inside { } only).

function testScope() {
  if (true) {
    var a = 10; // function-scoped
    let b = 20; // block-scoped
    const c = 30; // block-scoped
  }

  console.log(a); // ✅ 10 (var is function-scoped, accessible here)
  console.log(b); // ❌ ReferenceError: b is not defined (let is block-scoped)
  console.log(c); // ❌ ReferenceError: c is not defined (const is block-scoped)
}

testScope();

console.log(a); // ❌ ReferenceError: a is not defined (var is NOT global, only function-scoped)
console.log(b); // ❌ ReferenceError: b is not defined (let is block-scoped)
console.log(c); // ❌ ReferenceError: c is not defined (const is block-scoped)

// 2. Re-declaration
// var → can be re-declared in the same scope.
// let & const → cannot be re-declared in the same scope.
var x = 10;
var x = 20; // ✅ allowed
console.log(x); // 20

let y = 30;
// let y = 40; ❌ SyntaxError (can't redeclare)
console.log(y);

const z = 50;
// const z = 60; ❌ SyntaxError (can't redeclare)
console.log(z);

// 3. Re-assignment
// var → can be reassigned.
// let → can be reassigned.
// const → cannot be reassigned.
var name1 = "Deep";
name1 = "Chandra"; // ✅ allowed

let name2 = "Joshi";
name2 = "Coder"; // ✅ allowed

const name3 = "Developer";
// name3 = "Engineer"; ❌ TypeError (not allowed)

// 4. Hoisting
// All variables are hoisted to the top of their scope.
// var → initialized as undefined.
// let & const → hoisted but kept in Temporal Dead Zone (TDZ) until assigned.
console.log(a); // undefined (var is hoisted)
var a = 10;

console.log(b); // ❌ ReferenceError (TDZ)
let b = 20;

console.log(c); // ❌ ReferenceError (TDZ)
const c = 30;

// 5. Binding with this
// var → attaches to window object (in browser).
// let & const → do NOT attach to window.
var a = 10;
let b = 20;
const c = 30;

console.log(window.a); // ✅ 10
console.log(window.b); // ❌ undefined
console.log(window.c); // ❌ undefined

// ====================================================================================================================
// ====================================================================================================================

// ========= What is Good? =========
// let and const have block scope.
// let and const can not be redeclared.
// let and const must be declared before use.
// let and const does not bind to this.
// let and const are not hoisted.

// ========= What is Not Good? =========
// var does not have to be declared.
// var is hoisted.
// var binds to this.

const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2565648 // can't modify const value

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// ==========================================================================================================================//
// ==========================================================================================================================//

// LET AND CONST HAVE BLOCK SCOPE
const number = 50;

function print() {
  const square = number * number;

  if (number < 60) {
    var largerNumber = 80;
    let smallNumber = 40;
    const anotherLargerNumber = 100;

    console.log(square); // 2500
  }

  console.log(largerNumber); // 80
  console.log(smallNumber); // ReferenceError: smallNumber is not defined (let has block scope)
  console.log(anotherLargerNumber); // ReferenceError: anotherLargerNumber is not defined (const has block scope)
}

print();
// 2500
// 80
// ReferenceError: smallNumber is not defined
// ReferenceError: anotherLargerNumber is not defined
// because anotherLargerNumber is declared with const in block.
// IMP NOTES - let and const have block scope, largerNumber give their value because largerNumber store in var and anotherLargerNumber give an error because their value store in const.

// ==========================================================================================================================//
// ==========================================================================================================================//

// NAMING VARIABLE RULES

// - Variable names can include letters (both uppercase and lowercase), digits, underscores (`_`), and dollar signs (`$`).
// - JavaScript is case-sensitive. This means `myVariable` and `myvariable` are considered different variables.
// - Variable names cannot be JavaScript reserved words (also known as keywords) such as `let`, `var`, `const`, `if`, `else`, `while`, `for`, `return`, `function`, etc.
// - Common convention in JavaScript is to use camelCase for variable names. This means starting with a lowercase letter and capitalizing the first letter of each subsequent word.
// - Use meaningful and descriptive names that clearly indicate the purpose of the variable. This improves code readability.
// - Keep a consistent style throughout the code.

// Following these rules and conventions helps in writing clean, understandable, and maintainable JavaScript code.
