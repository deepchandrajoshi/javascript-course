async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

// let a = await sleep();
// let b = await sleep();

// SyntaxError: await is only valid in async functions and the top level bodies of modules

// to resolve this type of errors we use IIFE syntax
(async function main() {
  let a = await sleep();
  console.log(a);
  let b = await sleep();
  console.log(b);
})();
