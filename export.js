document.getElementById("exportBtn").addEventListener("click", () => {

  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const dataStr = JSON.stringify(transactions, null, 2);

  const blob = new Blob([dataStr], { type: "application/json" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "transactions_backup.json";
  a.click();

});
