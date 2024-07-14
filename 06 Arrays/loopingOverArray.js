let heroes = ["ironman", "thor", "hulk", "spiderman", "shaktiman"];

// using for loop
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

//for of
for (let hero of heroes) {
  // hero is the index of array
  console.log(hero);
}

//
let cities = ["delhi", "mumbai", "Channei", "kolkata", "Uttarakhand"];

for (let city of cities) {
  console.log(city);
  console.log(city.toUpperCase());
}
