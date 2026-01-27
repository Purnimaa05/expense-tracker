const balanceEl = document.getElementById("balance");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount"(;
const typeEl = document.getElementById("type");
const addBtn = document.getElementById("addBtn");
const transactionList = document.getElementById("transactionList");

let transactions = [];
function updateBalance(){
  let balance = 0;
  transactions.forEach(txn => {
    if(txn.type == "income"){
      balance += txn.amount;
    } else{
      balance -= txn.amount;
    }
  });

balanceEl.textContent = balance;
}
function renderTransactions() {
  transactionList.innerHTML = "";
  transactions.forEach(txn => {
    const li = document.createElement("li");
    li.classList.add(txn.type);
    li.innerHTML = `
       <span>${txn.description}</span>
       <span>₹${txn.amount}</span>
       `;
    transactionList.appendChild(li);
  });
  updateBalance();
}
addBtn.addEventListener("click", () => {
  const description = descriptionEl.value.trim();
  const amount = Number(amountEl.value);
  const type = typeEl.value;
  if (description === "" || amount <= 0){
    alert("Please enter valid details");
    return;
  }
  const transaction = {
    description,
    amount,
    type
  };
  transactions.push(transaction);
  renderTransactions();
  descriptionEl.value = "";
  amountEl.value = "";
});
