// Simulate fetching user basic info
function fetchUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User info fetched");
      resolve({ userId: "user_001", name: "John Doe" });
    }, 2000);
  });
}

// Simulate fetching user order history
function fetchOrderHistory(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Order history for ${userId} fetched`);
      resolve(["Order_123", "Order_456", "Order_789"]);
    }, 3000);
  });
}

// Simulate fetching user wishlist
function fetchWishlist(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Wishlist for ${userId} fetched`);
      resolve(["Item_001", "Item_002", "Item_003"]);
    }, 2500);
  });
}

// Fetch the data in sequence
console.log("Fetching user info...");
fetchUserInfo()
  .then((userInfo) => {
    console.log(`User Info: ${JSON.stringify(userInfo)}`);

    console.log("Fetching order history...");
    return fetchOrderHistory(userInfo.userId); // Fetch order history next
  })
  .then((orderHistory) => {
    console.log(`Order History: ${orderHistory.join(", ")}`);

    console.log("Fetching wishlist...");
    return fetchWishlist("user_001"); // Fetch wishlist next
  })
  .then((wishlist) => {
    console.log(`Wishlist: ${wishlist.join(", ")}`);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
