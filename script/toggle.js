//  add money toggle
document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("add-money", "block");
  handleToggle("cash-out", "none");
  handleToggle("get-bonus", "none");
  handleToggle("latest-payment", "none");
  handleToggle("transfer-section", "none");
  handleToggle("pay-bill", "none");
  handleToggle("transaction", "none");

  // color change with reuseable function
  changeBoxstyle("cash-out-box", "");
  changeBoxstyle("transaction-box", "");
  changeBoxstyle("transfer-box", "");
  changeBoxstyle("pay-bill-box", "");
  changeBoxstyle("get-bonus-box", "");
  changeBoxstyle("add-money-box", "2px solid rgba(0, 0, 255, 0.294)");
  changeBoxstyle("add-money-box", " ");
});
//  cash out toggle
document.getElementById("cash-out-box").addEventListener("click", function () {
  handleToggle("cash-out", "block");
  handleToggle("add-money", "none");
  handleToggle("transfer-section", "none");
  handleToggle("pay-bill", "none");
  handleToggle("transaction", "none");
  handleToggle("get-bonus", "none");
  handleToggle("latest-payment", "none");

  // color change with reuseable function
  changeBoxstyle("add-money-box", "");
  changeBoxstyle("transaction-box", "");
  changeBoxstyle("transfer-box", "");
  changeBoxstyle("pay-bill-box", "");
  changeBoxstyle("get-bonus-box", "");
  changeBoxstyle("cash-out-box", "2px solid rgba(0, 0, 255, 0.294)");
});

// transection toggle
document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    handleToggle("transaction", "block");
    handleToggle("add-money", "none");
    handleToggle("cash-out", "none");
    handleToggle("transfer-section", "none");
    handleToggle("pay-bill", "none");
    handleToggle("latest-payment", "none");
    handleToggle("get-bonus", "none");

    // color change with reuseable Funcction

    changeBoxstyle("add-money-box", "");
    changeBoxstyle("transaction-box", "2px solid rgba(0, 0, 255, 0.294)");
    changeBoxstyle("transfer-box", "");
    changeBoxstyle("pay-bill-box", "");
    changeBoxstyle("get-bonus-box", "");
    changeBoxstyle("cash-out-box", "");
  });

// transfer section
document.getElementById("transfer-box").addEventListener("click", function () {
  // hide cashout and add money section

  handleToggle("latest-payment", "none");
  handleToggle("add-money", "none");
  handleToggle("cash-out", "none");
  handleToggle("get-bonus", "none");
  handleToggle("pay-bill", "none");
  handleToggle("transaction", "none");
  handleToggle("transfer-section", "block");

  // color change with reuseable Funcction

  changeBoxstyle("add-money-box", "");
  changeBoxstyle("transaction-box", "");
  changeBoxstyle("transfer-box", "2px solid rgba(0, 0, 255, 0.294)");
  changeBoxstyle("pay-bill-box", "");
  changeBoxstyle("get-bonus-box", "");
  changeBoxstyle("cash-out-box", "");
});

//  get bonus togle

document.getElementById("get-bonus-box").addEventListener("click", function () {


  handleToggle("add-money", "none");
  handleToggle("cash-out", "none");
  handleToggle("transaction", "none");
  handleToggle("latest-payment", "none");
  handleToggle("transfer-section", "none");

  handleToggle("pay-bill", "none");
  handleToggle("get-bonus", "block");

  // color change with reuseable Funcction

  changeBoxstyle("add-money-box", "");
  changeBoxstyle("transaction-box", "");
  changeBoxstyle("transfer-box", "");
  changeBoxstyle("pay-bill-box", "");
  changeBoxstyle("get-bonus-box", "2px solid rgba(0, 0, 255, 0.294)");
  changeBoxstyle("cash-out-box", "");
});
//  pay bill toggle
document.getElementById("pay-bill-box").addEventListener("click", function () {
  // document.getElementById("pay-bill").style.display = "block";
  // document.getElementById("cash-out").style.display = "none";
  handleToggle("add-money", "none");
  handleToggle("cash-out", "none");
  handleToggle("transaction", "none");
  handleToggle("latest-payment", "none");
  handleToggle("transfer-section", "none");
  handleToggle("get-bonus", "none");
  handleToggle("pay-bill", "block");

  // color change with reuseable Funcction

  changeBoxstyle("add-money-box", "");
  changeBoxstyle("transaction-box", "");
  changeBoxstyle("transfer-box", "");
  changeBoxstyle("pay-bill-box", "2px solid rgba(0, 0, 255, 0.294)");
  changeBoxstyle("get-bonus-box", "");
  changeBoxstyle("cash-out-box", "");
});
// log out toggle

document.getElementById("log-out-btn").addEventListener("click", function () {
  const promptData = prompt("type 'yes' to log out");
  if (promptData === "yes") {
    window.location.href = "./index.html";
  }
});
