// Variables are Containers for Storing Data
// The var keyword was used in all JavaScript code from 1995 to 2015.
// The let and const keywords were added to JavaScript in 2015

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

// accountId = 2565648 // not can't modify const value

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

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
