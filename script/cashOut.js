document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const accountNumber = document.getElementById("agent-account-number").value;

  const amount = getInputValueById("cash-out-amount");
  const pinNumber = getInputValueById("cash-out-pin");
  const mainBalance = getInnerTextById("main-balance");
  const account = document.getElementById("account").value;
  const transactionContainer = document.getElementById("transection-container");

  const date = new Date();
  const hours = date.getHours() % 12 || 12; // Converts 0 to 12
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  const minute = date.getMinutes();

  // current day
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = days[new Date().getDay()];
  // console.log(currentDayName);
  const currentTime = `${currentDayName}: ${hours}: ${minute}: ${ampm}`;

  // random number for transection id

  const randomTransection = Math.floor(1000000000 + Math.random() * 9000000000)
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
      <div class=" flex items-center mb-4 justify-between p-2 bg-red-100 rounded-md shadow">
            <div class="flex items-center ">
              <div class="ml-2">
                    <img class="w-10 bg-neutral-200 rounded-full p-2" src="./assets/wallet1.png"
                       alt="wallet">
           </div>
              <div class="ml-5">
                   <h3 class="font-semibold text-neutral-700">Cash Out ${amount} successfully!</h3>
                   <p class="text-neutral-600">Account number: ${accountNumber}</p>
                   <p>Transection id: PY${randomTransection}</p>
                   <span class="font-semibold">At ${currentTime}</span>

                   </div>
            </div>
          <div>

       `;

      transactionContainer.appendChild(div);
    } else {
    }
  } else {
    alert("enter valid pin");
  }
});
