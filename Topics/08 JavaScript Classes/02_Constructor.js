// ============================================================================
// Topic: Constructor
// Description: Constructor initializes object properties
// ============================================================================

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1.brand); // Toyota
console.log(car1.model); // Corolla
console.log(car1.year);  // 2020

// You can create multiple objects with different values
const car2 = new Car("Honda", "Civic", 2022);
console.log(car2);

// ============================================================================
// End of 02_Constructor.js
// ============================================================================
