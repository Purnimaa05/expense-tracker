const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

let income = 0;
let expense = 0;

transactions.forEach(tx => {
  if (tx.type === "income") {
    income += tx.amount;
  } else {
    expense += tx.amount;
  }
});

const net = income - expense;

document.getElementById("totalCount").textContent = transactions.length;
document.getElementById("totalIncome").textContent = "₹ " + income;
document.getElementById("totalExpense").textContent = "₹ " + expense;
document.getElementById("netBalance").textContent = "₹ " + net;
