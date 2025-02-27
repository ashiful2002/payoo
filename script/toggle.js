//  add money toggle
document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "block";
  document.getElementById("cash-out").style.display = "none";
  handleToggle("get-bonus", "none");
  handleToggle("latest-payment", "none");
  handleToggle("transfer-section", "none");
  handleToggle("pay-bill", "none");
  // this.classList.remove("clicked1-box")
  // this.classList.add("clicked1-box")

  // color change with reuseable Funcction

  // changeBoxstyleWithClassList("add-money-box","clicked-box")
  // changeBoxstyleWithClassList("cash-out-box","remove-style")
  // changeBoxstyleWithClassList("transaction-box","remove-style")
  // changeBoxstyleWithClassList("pay-bill-box","remove-style")
  // changeBoxstyleWithClassList("get-bonus-box","remove-style")

  
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
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "block";
  handleToggle("get-bonus", "none");
  handleToggle("transfer-section", "none");
  handleToggle("pay-bill", "none");
  // this.classList.remove("clicked1-box")
  // this.classList.add("clicked2-box")

  // color change with reuseable Funcction

  
  // changeBoxstyleWithClassList("add-money-box","remove-style")
  // changeBoxstyleWithClassList("cash-out-box","clicked-box")
  // changeBoxstyleWithClassList("transaction-box","remove-style")
  // changeBoxstyleWithClassList("transfer-box","remove-style")
  // changeBoxstyleWithClassList("pay-bill-box","remove-style")
  // changeBoxstyleWithClassList("get-bonus-box","remove-style")

  
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
    // hide cashout and add money section
    handleToggle("add-money", "none");
    handleToggle("cash-out", "none");
    handleToggle("get-bonus", "none");
    handleToggle("transaction", "block");
    handleToggle("transfer-section", "none");

    // color change with reuseable Funcction

    changeBoxstyle("add-money-box", "");
    changeBoxstyle("transaction-box", "2px solid rgba(0, 0, 255, 0.294)");
    changeBoxstyle("transfer-box", "");
    changeBoxstyle("pay-bill-box", "");
    changeBoxstyle("get-bonus-box", "");
    changeBoxstyle("cash-out-box", "");

    // const initialvalue = "no transection history";
    // const transactionContainer = document.getElementById(
    //   "transection-container"
    // );
    // transactionContainer.innerText = initialvalue;
  });
document.getElementById("transfer-box").addEventListener("click", function () {
  // hide cashout and add money section

  handleToggle("latest-payment", "none");
  handleToggle("add-money", "none");
  handleToggle("cash-out", "none");
  handleToggle("get-bonus", "none");
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
  this.style.cursor = "pointer";
  this.classList.add = "border";

  handleToggle("add-money", "none");
  handleToggle("cash-out", "none");
  handleToggle("transaction", "none");
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
  document.getElementById("pay-bill").style.display = "block";
  document.getElementById("cash-out").style.display = "none";
  handleToggle("get-bonus", "none");
  handleToggle("latest-payment", "none");
  handleToggle("transfer-section", "none");
  // this.classList.remove("clicked1-box")
  // this.classList.add("clicked1-box")

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


