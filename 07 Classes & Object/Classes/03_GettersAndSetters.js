// Classes can have getter and setter methods to control access to properties.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter
  get area() {
    return this.width * this.height;
  }

  // Setter
  set width(value) {
    if (value <= 0) {
      throw new Error("Width must be positive");
    }
    this._width = value;
  }

  get width() {
    return this._width;
  }

  set height(value) {
    if (value <= 0) {
      throw new Error("Height must be positive");
    }
    this._height = value;
  }

  get height() {
    return this._height;
  }
}

const rectangle1 = new Rectangle(10, 20);
console.log(rectangle1.area); // Output: 200
rectangle1.width = 15;
console.log(rectangle1.area); // Output: 300
