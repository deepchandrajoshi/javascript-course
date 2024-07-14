// Problem 1
// Add two number
// function addTwoNumber(number1, number2) {
//   console.log(number1 + number2); // 9
// }
// const result = addTwoNumber(4, 5);
// console.log(result); // undefined
// it does not return any value, result is undefined

// ========== Solution ========== //
function addTwoNumber(number1, number2) {
  return number1 + number2; // Return the sum of the two numbers
}

const result = addTwoNumber(4, 5);
console.log(result); // 9
//Notes: because in Memory Management variable first store then they store their value

//   ====================================================================================================  //

// Problem 2
function loginUserMessage(userName) {
  return `${userName} Just Logged in`;
}
loginUserMessage("Deep Chandra Joshi"); // Never Print anything because we never log this function
console.log(loginUserMessage("Deep Chandra Joshi")); // Deep Chandra Joshi Just Logged in
console.log(loginUserMessage()); // undefined Just Logged in

// Solution of undefined
function loginUserMessage(userName) {
  if (!userName) {
    // !userName is userName === undefined
    console.log("Please Enter a UserName");
    return;
  }
  return `${userName} Just Logged in`;
}
console.log(loginUserMessage()); // Please Enter a UserName

//   ====================================================================================================  //

// Problem 3
