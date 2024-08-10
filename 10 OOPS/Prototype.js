// Prototype - js object have special property called prototype that is either NULL or references another object.
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // set rabbit.[[prototype]] = animal
console.log(rabbit.eats); // true
