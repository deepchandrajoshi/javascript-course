// ============================================================================
// Topic: Class Methods
// Description: Defining methods inside classes
// ============================================================================

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate area
    area() {
        return this.width * this.height;
    }

    // Method to calculate perimeter
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(5, 10);
console.log("Area:", rect.area()); // 50
console.log("Perimeter:", rect.perimeter()); // 30

// ============================================================================
// End of 03_ClassMethods.js
// ============================================================================
