let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const list = document.getElementById("manageList");

function render() {
  list.innerHTML = "";

  transactions.forEach((tx, index) => {
    const li = document.createElement("li");

    li.classList.add(tx.type);

    li.innerHTML = `
      <span>${tx.description} (₹${tx.amount})</span>
      <button onclick="deleteTx(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

function deleteTx(index) {
  transactions.splice(index, 1);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  render();
}

render();
