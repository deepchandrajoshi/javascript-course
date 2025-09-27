// to add more property in object

class Animal {
  constructor(name) {
    this.name = name;
    console.log("object is created...");
  }
  eats() {
    console.log("kha raha hu");
  }
  jumps() {
    console.log("kood rha hu");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("object is created and he is a Lion...");
  }
}

let a = new Animal("bunny");
console.log(a);
console.log(a.name); // bunny
console.log(a.eats());
console.log(a.jumps());

let l = new Lion("shara");
console.log(l);
