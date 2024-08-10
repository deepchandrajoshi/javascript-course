function task1(callback) {
  setTimeout(() => {
    console.log(
      "1. I'm reading a book on anti-gravity. It's impossible to put down."
    );
    callback();
  }, 1500);
}

function task2(callback) {
  setTimeout(() => {
    console.log(
      "2. Why don't scientists trust atoms? Because they make up everything!"
    );
    callback();
  }, 3000);
}

function task3(callback) {
  setTimeout(() => {
    console.log(
      "3. I told my wife she was drawing her eyebrows too high. She looked surprised."
    );
    callback();
  }, 1000);
}

function task4(callback) {
  setTimeout(() => {
    console.log(
      "4. Parallel lines have so much in common. It's a shame they'll never meet."
    );
    callback();
  }, 500);
}

function task5(callback) {
  setTimeout(() => {
    console.log(
      "5. Why did the scarecrow win an award? Because he was outstanding in his field."
    );
    callback();
  }, 2500);
}

function task6(callback) {
  setTimeout(() => {
    console.log("6. I used to play piano by ear, but now I use my hands.");
    callback();
  }, 3500);
}

function task7(callback) {
  setTimeout(() => {
    console.log(
      "7. Why don't skeletons fight each other? They don't have the guts."
    );
    callback();
  }, 2000);
}

function task8(callback) {
  setTimeout(() => {
    console.log("8. What do you call fake spaghetti? An impasta.");
    callback();
  }, 4000);
}

// if i want to print squence wise i need to use callback hell
// callback hell
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          task6(() => {
            task7(() => {
              task8(() => {});
            });
          });
        });
      });
    });
  });
});
