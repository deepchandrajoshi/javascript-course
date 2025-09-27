// async function return promise

async function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data.. 21 degree");
      resolve(200); // 200 means success
    }, 2000);
  });
}

// API call
async function getWeatherData() {
  await api(); // 1st call
  await api(); // 2nd call
}
getWeatherData();
