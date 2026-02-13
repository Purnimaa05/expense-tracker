const usernameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");
const statusEl = document.getElementById("status");

document.getElementById("loginBtn").addEventListener("click", () => {
  const username = usernameEl.value.trim();
  const password = passwordEl.value.trim();

  if (!username || !password) {
    statusEl.textContent = "Please enter both fields.";
    return;
  }

  // Temporary login logic (frontend only)
  localStorage.setItem("loggedInUser", username);

  statusEl.textContent = "Login successful ✅";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
});
