// HigherOrderFunction => includes, Map, Filter, Reduce
const people = [
  { name: "John Doe", age: 16 },
  { name: "Thomas Calls", age: 19 },
  { name: "Liam Smith", age: 20 },
  { name: "Jessy Pinkman", age: 18 },
];

const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];

const ageAbove18 = (person) => person.age >= 18;

const addCoffeeLoverProperty = (person) => {
  person.coffeeLover = coffeeLovers.includes(person.name); // includes
  return person;
};

const ageReducer = (sum, person) => sum + person.age;

const coffeeLoversAbove18 = people
  .filter(ageAbove18) // filter
  .map(addCoffeeLoverProperty); // map

const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18.reduce(ageReducer, 0); // reduce

const totalAge = people.reduce(ageReducer, 0);

console.log(coffeeLoversAbove18); // return Array of coffeeLoversAbove18
console.log(totalAgeOfCoffeeLoversAbove18); // 57
console.log(totalAge); // 73
