// ================================================================================================================== //
// ============================================ JAVASCRIPT SCOPE ================================================ //
// ================================================================================================================== //

// In JavaScript, scope determines **where a variable is accessible** in your code. 
// There are three main types of scope: 
// 1️⃣ Global Scope
// 2️⃣ Function Scope
// 3️⃣ Block Scope

// ================================================================================================================== //
// 1️⃣ Global Scope

// Variables declared outside any function or block are in the global scope.
// They can be accessed from anywhere in the code.

let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // Accessible here
}

showGlobal(); 
console.log(globalVar); // Accessible here too

// ================================================================================================================== //
// 2️⃣ Function Scope (Local Scope)

// Variables declared inside a function are local to that function
// They cannot be accessed outside the function

function localScopeExample() {
    let localVar = "I am local";
    console.log(localVar); // Accessible inside function
}

localScopeExample();

// console.log(localVar); // ❌ Error: localVar is not defined

// ================================================================================================================== //
// 3️⃣ Block Scope

// Variables declared with let or const inside a block { } are block scoped
// They are accessible only inside the block

if (true) {
    let blockVar = "I am block scoped";
    const blockConst = "I am also block scoped";
    console.log(blockVar);   // Accessible here
    console.log(blockConst); // Accessible here
}

// console.log(blockVar);   // ❌ Error
// console.log(blockConst); // ❌ Error

// Variables declared with var are NOT block scoped, only function scoped
if (true) {
    var varVariable = "I am not block scoped";
}
console.log(varVariable); // Accessible here ✅

// ================================================================================================================== //
// 4️⃣ Lexical / Static Scope

// JavaScript uses **lexical scoping**, meaning a function's scope is determined by where it is written in code

function outer() {
    let outerVar = "I am outer";

    function inner() {
        console.log(outerVar); // Can access outerVar because of lexical scope
    }

    inner();
}

outer();

// ================================================================================================================== //
// 5️⃣ Scope and Closures

// A closure allows a function to access variables from an outer function even after the outer function has finished executing

function closureExample() {
    let count = 0;

    return function increment() {
        count++;
        console.log(count);
    };
}

let counter = closureExample();
counter(); // 1
counter(); // 2
counter(); // 3

// ================================================================================================================== //
// 6️⃣ Global Object and var

// var variables in global scope become properties of the global object (window in browsers)

var globalVar2 = "I am var global";
console.log(window.globalVar2); // "I am var global" (browser environment)

// let and const do NOT attach to the global object
let globalVar3 = "I am let global";
console.log(window.globalVar3); // undefined

// ================================================================================================================== //
// 7️⃣ Summary of Scopes

/*
1. Global Scope: Accessible anywhere
2. Function Scope: Accessible inside the function only
3. Block Scope: let/const are block scoped, var is not
4. Lexical Scope: Nested functions can access outer variables
5. Closures: Functions remember their outer variables even after outer function execution
6. Global Object: var attaches to window (browser) or global (Node.js), let/const do not
*/

// ================================================================================================================== //
// ============================================ END OF SCOPE SECTION ============================================ //
// ================================================================================================================== //
