const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const summaryList = document.getElementById("summaryList");

const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

let income = 0;
let expense = 0;

transactions.forEach(txn => {
  if (txn.type === "income") {
    income += txn.amount;
  } else {
    expense += txn.amount;
  }
});

const balance = income - expense;

balanceEl.textContent = balance;
incomeEl.textContent = income;
expenseEl.textContent = expense;

// Simple breakdown list
summaryList.innerHTML = `
  <li class="income">Total Income: ₹${income}</li>
  <li class="expense">Total Expense: ₹${expense}</li>
`;

function goBack() {
  window.location.href = "index.html";
}
