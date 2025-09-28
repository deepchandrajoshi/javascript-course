// What it is:
// APIs provided by the browser for advanced functionality:
//      navigator → browser info
//      location → URL info
//      history → browser history
//      geolocation → user's location
//      canvas → draw graphics
//      audio/video → multimedia handling

// Example:
console.log(navigator.userAgent);
navigator.geolocation.getCurrentPosition((pos) => console.log(pos.coords));
