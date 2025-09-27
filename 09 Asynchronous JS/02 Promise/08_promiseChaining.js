// Promise
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Liquid: ["water", "ice"],
  Holder: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true; // if true .then work else .catch work

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is close"));
    }
  });
};
// Promise Chaining
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0o0, () => console.log("production has started"));
  })

  .then(() => {
    return order(2000, () => console.log("The Fruit was chopped"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("start the machine"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`ice creme placed on ${stocks.Holder[0]}`)
    );
  })
  .then(() => {
    return order(3000, () =>
      console.log(`${stocks.Toppings[0]} was added as toppings`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("served ice creme"));
  })

  // Error Handling

  .catch(() => {
    console.log("Customer left");
  })

  // .finally = thin is run in both

  .finally(() => {
    console.log("our shop is closed");
  });
