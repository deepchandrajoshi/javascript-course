// Higher Order Function
// arr.forEach(callBackFunction)
// CallBackFunction : here, it is a function to execute for each element in the array.
// a callBack is a function passed as an argument to another function.
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
  console.log(val);
});

// arrow function
arr.forEach((val) => {
  console.log(val);
});

let cities = ["almora", "delhi", "mumbai"];
cities.forEach((val, idx, cities) => {
  console.log(val.toUpperCase(), idx, cities);
});
