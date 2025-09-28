// ============================================================================
// Topic: Static Methods
// Description: Methods that belong to the class, not the instance
// ============================================================================

class MathUtil {
    static square(x) {
        return x * x;
    }

    static cube(x) {
        return x * x * x;
    }
}

// Calling static methods
console.log("Square of 5:", MathUtil.square(5)); // 25
console.log("Cube of 3:", MathUtil.cube(3));     // 27

// Static methods cannot be called on instances
const util = new MathUtil();
// console.log(util.square(5)); // ❌ Error

// ============================================================================
// End of 06_Static.js
// ============================================================================
