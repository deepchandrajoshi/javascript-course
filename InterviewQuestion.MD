Q- What is Closure in JS? // Very IMP Question for every JS Interview.
~

Q- Expain SyntaxError vs TypeError vs ReferenceError?
~

Q- deference between not define VS undefine?
~

Q- deference between Child Nodes VS Child Element?
~

Q- deference between let and const vs var? (variable Hoisting)
~ console.log(a) // Cannot access 'a' before initialization
console.log(b) // Cannot access 'b' before initialization
console.log(c) // undefined
let a = 12;
const b = 23;
var c = 54;

Q- What is temporal dead zone?
~

Q- What is function scope?
~

Q- What is the deference between forEach and Map function?
~ `map`
`Purpose`: Used to create a new array by applying a provided function to each element of the original array.
`Return Value`: A new array with the results of calling a provided function on every element in the calling array.
`Mutability`: Does not mutate the original array.
`Chainability`: Chainable, as it returns a new array.
`CODE=>`
const arr = [1, 2, 3, 4];
const doubled = arr.map((element) => element \* 2);
console.log(doubled); // Outputs: [2, 4, 6, 8]
..............................and..............................
~ `forEach`
`Purpose`: Used to execute a provided function once for each array element.
`Return Value`: undefined.
`Mutability`: Does not mutate the original array, but can be used to perform side effects (e.g., modifying elements in place).
`Chainability`: Not chainable since it returns undefined.
`CODE=>`
const arr = [1, 2, 3, 4];
arr.forEach((element, index, array) => {
console.log(element\*2); // Outputs: 2, 4, 6, 8
});

Q- What is the difference between a promise and an async/await?
~

Q- What is Lexical enviroment?
~

Q- what is Event Loop?
~

Q-
~
Q-
~
Q-
~
Q-
~
Q-
~
