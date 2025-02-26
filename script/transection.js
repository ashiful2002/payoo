document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    // hide cashout and add money section
    handleToggle("add-money", "none");
    handleToggle("cash-out", "none");
    handleToggle("transaction", "block");

    // const initialvalue = "no transection history";
    // const transactionContainer = document.getElementById(
    //   "transection-container"
    // );
    // transactionContainer.innerText = initialvalue;
  });
//   function handleToggle(id, status) {
//     document.getElementById(id).style.display = status;
//   }
