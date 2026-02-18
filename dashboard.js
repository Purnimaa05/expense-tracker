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

const balance = income - expense;

document.getElementById("totalIncome").textContent = "₹ " + income;
document.getElementById("totalExpense").textContent = "₹ " + expense;
document.getElementById("currentBalance").textContent = "₹ " + balance;
