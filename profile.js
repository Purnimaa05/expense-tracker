const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
const user = JSON.parse(localStorage.getItem("user")) || {
  username: "Guest",
  joined: new Date().toLocaleDateString()
};

document.getElementById("usernameDisplay").textContent = user.username;
document.getElementById("totalTransactions").textContent = transactions.length;
document.getElementById("joinedDate").textContent = user.joined;

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("user");
  alert("Logged out successfully!");
  window.location.href = "login.html";
});
