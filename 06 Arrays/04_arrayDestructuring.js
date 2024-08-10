const numbers = [1, 2, 3];

// Destructuring assignment
const [one, two, three] = numbers;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// Skipping Items
// You can skip items in the array by leaving a space between commas:
{
  const numbers = [1, 2, 3, 4];

  const [first, , third] = numbers;

  console.log(first); // 1
  console.log(third); // 3
}

// Default Values
// You can also provide default values for variables if the array does not have enough elements:
{
  const numbers = [1];

  const [first, second = 2] = numbers;

  console.log(first); // 1
  console.log(second); // 2
}

// Rest Pattern
// You can use the rest pattern (...) to collect the remaining elements into a new array:
{
  const numbers = [1, 2, 3, 4, 5];

  const [first, second, ...rest] = numbers;

  console.log(first); // 1
  console.log(second); // 2
  console.log(rest); // [3, 4, 5]
}
