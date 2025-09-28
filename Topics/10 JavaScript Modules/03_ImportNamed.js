// ============================================================================
// Topic: Named Import
// Description: Import specific exports from a module
// ============================================================================

// Importing named exports from 01_ExportNamed.js
import { pi, e, add, multiply } from "./01_ExportNamed.js";

console.log("Pi:", pi); // 3.14159
console.log("Euler:", e); // 2.71828
console.log("Add 5 + 10:", add(5, 10)); // 15
console.log("Multiply 5 * 10:", multiply(5, 10)); // 50

// ============================================================================
// End of 03_ImportNamed.js
// ============================================================================
