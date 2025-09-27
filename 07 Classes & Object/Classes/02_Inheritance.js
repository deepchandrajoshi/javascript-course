// Classes can inherit from other classes using the extends keyword. The super keyword is used to call the constructor of the parent class.
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Output: Buddy barks.
