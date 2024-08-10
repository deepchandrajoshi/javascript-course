let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Liquid: ["water", "ice"],
  Holder: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0);
    console.log("start the production");

    await time(2000);
    console.log("cut the fruits");

    await time(2000);
    console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice creme placed on ${stocks.Holder[0]}`);

    await time(3000);
    console.log(`${stocks.Toppings[0]} was added as toppings`);

    await time(2000);
    console.log("serve ice creme");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shop is closed");
  }
}
kitchen();
