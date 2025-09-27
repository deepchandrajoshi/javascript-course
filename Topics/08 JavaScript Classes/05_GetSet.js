// ============================================================================
// Topic: Getters and Setters
// Description: Access and modify class properties using get and set
// ============================================================================

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Getter for area
    get area() {
        return this.width * this.height;
    }

    // Setter to update width and height
    set dimensions({ width, height }) {
        this.width = width;
        this.height = height;
    }
}

const rect = new Rectangle(5, 10);
console.log("Area:", rect.area); // 50

rect.dimensions = { width: 8, height: 12 }; // update dimensions
console.log("New Area:", rect.area); // 96

// ============================================================================
// End of 05_GetSet.js
// ============================================================================
