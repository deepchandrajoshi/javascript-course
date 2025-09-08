function sum(a, b, c) {
  return a + b + c;
}

let arr = [1, 34, 43];
console.log(arr[0] + arr[1] + arr[2]); // 78 / Traditional
console.log(sum(arr[0], arr[1], arr[2])); // 78 / Traditional
console.log(sum(...arr)); // 78

// another example
let arr2 = [1, 34, 45, 54, 65];
let obj = { ...arr2 };
console.log(obj); // { '0': 1, '1': 34, '2': 45, '3': 54, '4': 65 }
