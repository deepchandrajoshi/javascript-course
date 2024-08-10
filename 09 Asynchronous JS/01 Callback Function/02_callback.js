function createQuote(quote, callback) {
  let myQuote = "Like I always say, " + quote;
  callback(myQuote); // 2
}

function logQuote(quote) {
  console.log(quote);
}

createQuote("eat your vegetables!", logQuote); // 1

// Result in console:
// Like I always say, eat your vegetables!
