// What it is:
// Learn how to catch and handle errors gracefully instead of breaking the program.
// Includes custom errors using throw.

try {
  let age = -5;
  if (age < 0) throw new Error("Age cannot be negative");
  console.log(age);
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("This runs always");
}
