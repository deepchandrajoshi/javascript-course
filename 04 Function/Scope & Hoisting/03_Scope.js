// Global Scope
const globalVar = "I'm a global variable"; // let, var, const

function accessGlobalVar() {
  console.log(globalVar); // Can access globalVar here
}

accessGlobalVar(); // Output: I'm a global variable
console.log(globalVar); // Output: I'm a global variable

// ===================================================================================================================== //
// ===================================================================================================================== //
// Function Scope
function functionScopeExample() {
  let functionScopedVar = "I'm a function scoped variable"; // let, var, const
  console.log(functionScopedVar); // Can access functionScopedVar here
}

functionScopeExample(); // Output: I'm a function scoped variable
// console.log(functionScopedVar); // Error: functionScopedVar is not defined

// ===================================================================================================================== //
// ===================================================================================================================== //
// Block Scope
if (true) {
  var blockScopedVar = "I'm a block scoped variable";
  let anotherBlockScopedVar = "I'm also a block scoped variable";
  console.log(blockScopedVar); // Can access blockScopedVar here
  console.log(anotherBlockScopedVar); // Can access anotherBlockScopedVar here
}

// console.log(blockScopedVar); // Error: blockScopedVar is not defined
// console.log(anotherBlockScopedVar); // Error: anotherBlockScopedVar is not defined

// ===================================================================================================================== //
// ===================================================================================================================== //
