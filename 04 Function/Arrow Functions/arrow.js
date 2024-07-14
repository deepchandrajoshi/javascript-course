// Syntax
/* 
    1. const functionName = (parameter1, parameter2, ...) => {
        // statements
    }
    2. const funcName = ()={
        // statements
    }
    */

//   ====================================================================================================  //

// Before Arrow:
hello = function () {
  return "Hello World!";
};

// With Arrow Function:
hello = () => {
  return "Hello World!";
};

//   ====================================================================================================  //

// Function with Parameter
const arrowSum = (a, b) => {
  return a + b;
};
console.log(arrowSum(123, 345));
