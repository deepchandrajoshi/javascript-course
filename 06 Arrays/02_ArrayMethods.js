// Array.from
let fName = "Deep";
let arr = Array.from(fName);
console.log(arr);

// Push - add to end
const cart = ["apple", "orange"];
cart.push("pear", 3, 4);
console.log(cart); // ['apple', 'orange', 'pear', 3, 4]

// Pop - delete to end
const fruits = ["apple", "orange", "banana"];
const fruit = fruits.pop();
console.log(fruits); // ["apple", "orange"]

// unShift = add to first
let name = ["chandra", "joshi"];
name.unshift("deep");
console.log(name);

// Shift = delete to first
let cats = ["Bob", "Willy", "Mini"];
cats.shift();
console.log(cats); // ['Willy', 'Mini']

// toString - convert array to string
let foodsItem = ["apple", "banana", "watermelon", "papaya", "litchi"];
console.log(foodsItem); // {"apple", "banana", "watermelon", "papaya", "litchi"}
console.log(foodsItem.toString()); // apple,banana,watermelon,papaya,litchi

// concat - join multiple arrays and return results
let marvalHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let heroes = marvalHeroes.concat(dcHeroes);
console.log(heroes); // [ 'thor', 'spiderman', 'ironman', 'superman', 'batman' ]

// Slice - return a piece of the array
let city = ["almora", "delhi", "dehradun", "ahmdabad", "gujrat", "kerla"];
console.log(city.slice(1, 3)); // [ 'delhi', 'dehradun' ]

// Splice - change the original array (add, remove, replace)
let num = [12, 12, 24, 35, 54, 56, 12];
num.splice(2, 2, 101, 230);
console.log(num); // [12, 12, 101, 230, 54, 56, 12];

// element add
num.splice(2, 0, 101);
console.log(num); // [12, 12, 101, 24, 35, 54,  56, 12]

// delete
num.splice(3, 1);
console.log(num); // [ 12, 12, 24, 54, 56, 12 ]

// Replace
num.splice(3, 1, 104);
console.log(num); // [12, 12, 24, 104, 54, 56, 12]

// Sort
// (2, 3, 1).sort() // [1, 2, 3]

// Filter
// (1, 2, 3).filter((num) => num % 2); // [1, 3]

// isArray
Array.isArray("[1, 2, 3]"); // false

// Array From
Array.from("123"); // ['1', '2', '3']
