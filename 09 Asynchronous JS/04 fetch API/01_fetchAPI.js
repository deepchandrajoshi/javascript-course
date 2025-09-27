// Fetch API - fetch api aprovides an interface for fetching (sending/receiving) resources.

// it uses Request and Response objects.

// syntax - let promise = fetch(url, [options])

const URL = "https://cat-fact.herokuapp.com/facts";

// with async-await
const getFacts = async () => {
  console.log("getting data...");
  let response = await fetch(URL);
  let data = await response.json(); // Await here to get the resolved data
  console.log(data[0].text);
};
getFacts();

// with Promise
// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data[2].text);
//     });
// }
// getFacts();
