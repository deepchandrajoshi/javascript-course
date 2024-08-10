const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
  console.log("getting data...");
  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json(); // Await here to get the resolved data
    console.log(data[0].text);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getFacts();
