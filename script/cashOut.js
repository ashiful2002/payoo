document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const accountNumber = document.getElementById("agent-account-number").value;

  // const pin = document.getElementById("cash-out-pin").value;
  // const convertedPin = parseFloat(pin);
  const amount = getInputValueById("cash-out-amount");
  const pinNumber = getInputValueById("cash-out-pin");
  const mainBalance = getInnerTextById("main-balance");
  const account = document.getElementById("account").value;
  const transactionContainer = document.getElementById("transection-container");
  // document.getElementById("cash-out-amount").value;
  // const convertedAmount = parseFloat(amount);
  // const mainBalance = document.getElementById("main-balance").innerText;
  // const convertedMainBalance = parseFloat(mainBalance);

  if (amount > mainBalance) {
    alert("insufficence balance");
    return;
  }
  if (accountNumber.length === 11) {
    if (pinNumber === 1234) {
      const sum = mainBalance - amount;
      setInnerTextByIdAndValue("main-balance", sum);
      // transection history
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="bg-red-600 p-4 text-white border rounded-md" >
      <h1 class="">cash out ${amount} from </h1>
      <p>From account number: ${account}</p>
      </div>
      
      `;
      // const p = document.createElement("p");
      // p.innerText = `
      // Added ${amount} from ${account}  this account and main ${sum}
      // `;

      transactionContainer.appendChild(div);
    } else {
    }
    // const sum = convertedMainBalance - convertedAmount;

    // document.getElementById("main-balance").innerText = sum;
  } else {
    alert("enter valid pin");
  }
});
