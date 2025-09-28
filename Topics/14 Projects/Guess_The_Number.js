// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Variable to store user's guess
let guess;

// Variable to track number of attempts
let attempts = 0;

while (true) {
  // Ask the user for a number
  guess = Number(prompt("Guess the number between 1 and 10:"));
  attempts++;

  if (guess === randomNumber) {
    console.log(`🎉 Correct! You guessed it in ${attempts} attempt(s)!`);
    break; // Exit the loop
  } else if (guess < randomNumber) {
    console.log("📉 Too low! Try again.");
  } else if (guess > randomNumber) {
    console.log("📈 Too high! Try again.");
  } else {
    console.log("❌ Please enter a valid number.");
  }
}
