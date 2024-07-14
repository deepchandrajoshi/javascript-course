// Accessing an array element
const myArray = [100, 200, 300];

console.log(myArray); // {100, 200, 300}
console.log(myArray[0]); // 100
console.log(myArray[1]); // 200

// Create new array
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2); // [ 1, 2, 3, 4 ]

// methods
console.log(myArray.includes(9)); // false
console.log(myArr2.indexOf(3)); // 2

// Arrays Properties
let marks = [98, 82, 94, 89, 78];
console.log(marks);

console.log(marks.length);
console.log(marks[3]);
marks[4] = 66;
console.log(marks);
