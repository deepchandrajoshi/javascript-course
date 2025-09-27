function outer() {
  let userName = "Deep";
  // console.log(secret); // ReferenceError: secret is not defined // Like We Can't access our child Properties
  function inner() {
    let secret = "my123";
    console.log("Inner Username", userName); // Can access outerVariable // Like Father Properties
  }
  function innerTwo() {
    console.log("Inner Username", userName); // Can access outerVariable // Like Father Properties
    // console.log(secret); // ReferenceError: secret is not defined // like we can't access our brothers Properties
  }
  inner();
  innerTwo();
}
outer();
// console.log("TO OUTER", userName); // ReferenceError: userName is not defined
inner(); // ReferenceError: inner is not defined
// NOTES - FOR MORE DETAILS WATCH - lexical scoping and closure | chai aur #javascript video from chai aur code..
