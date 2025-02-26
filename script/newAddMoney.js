document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    console.log("button is working");
    const amount = getInputValueById("amount");
    const pin = getInputValueById("pin");
    const mainBalance = getInnerTextById("main-balance");

    const account = document.getElementById("account").value;
    const selectedBank = document.getElementById("all-banks").value;

    console.log(selectedBank);

    if (amount < 0) {
      alert("posetive number din");
      return;
    }
    if (account.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        // document.getElementById("main-balance").innerText = sum;
        setInnerTextByIdAndValue("main-balance", sum);

        const transactionContainer = document.getElementById(
          "transection-container"
        );
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="bg-green-600 p-4 text-white border rounded-md" >
        <h1 class="">Added ${amount} from ${selectedBank}</h1>
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
    } else {
      alert("wrong pin entered");
    }
  });
