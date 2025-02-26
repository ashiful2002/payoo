document.getElementById("get-bonus-box").addEventListener("click", function () {
  this.style.cursor = "pointer";
  this.classList.add = "border";

  handleToggle("add-money", "none");
  handleToggle("cash-out", "none");
  handleToggle("transaction", "none");
  handleToggle("get-bonus", "block");
});

//   handleToggle("get-bonus", "none");

