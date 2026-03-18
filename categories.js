const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const categoryMap = {};

transactions.forEach(tx => {
  const category = tx.category || "General";

  if (!categoryMap[category]) {
    categoryMap[category] = 0;
  }

  if (tx.type === "expense") {
    categoryMap[category] += tx.amount;
  }
});

const list = document.getElementById("categoryList");

for (let category in categoryMap) {
  const li = document.createElement("li");

  li.classList.add("expense");

  li.innerHTML = `
    <span>${category}</span>
    <span>₹ ${categoryMap[category]}</span>
  `;

  list.appendChild(li);
}
