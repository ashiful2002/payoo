//  add money toggle
document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "block";
  document.getElementById("cash-out").style.display = "none";
  handleToggle("get-bonus", "none");
  handleToggle("latest-payment", "none");
  handleToggle("transfer-section", "none");
});
//  cash out toggle
document.getElementById("cash-out-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "block";
  handleToggle("get-bonus", "none");
  handleToggle("transfer-section", "none");
});

// transection toggle
document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    // hide cashout and add money section
    handleToggle("add-money", "none");
    handleToggle("cash-out", "none");
    handleToggle("get-bonus", "none");
    handleToggle("transaction", "block");
    handleToggle("transfer-section", "none");

    // const initialvalue = "no transection history";
    // const transactionContainer = document.getElementById(
    //   "transection-container"
    // );
    // transactionContainer.innerText = initialvalue;
  });
document.getElementById("transfer-box").addEventListener("click", function () {
  // hide cashout and add money section
  this.style.cursor = "pointer";

  handleToggle("latest-payment", "none");
  handleToggle("add-money", "none");
  handleToggle("cash-out", "none");
  handleToggle("get-bonus", "none");
  handleToggle("transaction", "none");
  handleToggle("transfer-section", "block");

  // const initialvalue = "no transection history";
  // const transactionContainer = document.getElementById(
  //   "transection-container"
  // );
  // transactionContainer.innerText = initialvalue;
});

// log out toggle

document.getElementById("log-out-btn").addEventListener("click", function () {
  const promptData = prompt("type 'yes' to log out");
  if (promptData === "yes") {
    window.location.href = "./index.html";
  }
});
