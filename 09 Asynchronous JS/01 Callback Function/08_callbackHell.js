// Calling a function inside another function is a callback function

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Liquid: ["water", "ice"],
  Holder: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"],
};

// console.log(stocks.Fruits[2]);

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`); // banana
    call_production();
  }, 2000);
};

// CALLBACK HELL
let production = () => {
  setTimeout(() => {
    console.log("Production has started");

    setTimeout(() => {
      console.log("The Fruit has been Chopped");

      setTimeout(() => {
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);

        setTimeout(() => {
          console.log(`the machine was stared`);

          setTimeout(() => {
            console.log(`Ice creme was placed on ${stocks.Holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.Toppings[0]} was added as toppings`);

              setTimeout(() => {
                console.log(`served ice creame`);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 1000);
};

order(0, production);
