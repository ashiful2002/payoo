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

    const date = new Date();
    const hours = date.getHours() % 12 || 12; // Converts 0 to 12
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    const minute = date.getMinutes();
    // current day
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDayName = days[new Date().getDay()];
    console.log(currentDayName);

    const currentTime = `${currentDayName}: ${hours}: ${minute}: ${ampm}`;
    if (amount < 0) {
      alert("please insert posetive number");
      return;
    }
    if (account.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        setInnerTextByIdAndValue("main-balance", sum);

        const transactionContainer = document.getElementById(
          "transection-container"
        );
        const div = document.createElement("div");
        div.innerHTML = `
       <div class=" flex items-center mb-4 justify-between p-2 bg-white rounded-md shadow">
             <div class="flex items-center ">
               <div class="ml-2">
                     <img class="w-10 bg-neutral-200 rounded-full p-2" src="./assets/wallet1.png"
                        alt="wallet">
            </div>
               <div class="ml-5">
                    <h3 class="font-semibold text-neutral-700">${amount} Added from ${selectedBank}</h3>
                    <p class="text-[12px] text-neutral-600">Account Number: ${account} </p>
                     <span class="font-semibold">${currentTime}</span>

                    </div>
             </div>
           <div>

        `;

        transactionContainer.appendChild(div);
      } else {
      }
    } else {
      alert("wrong pin entered");
    }
  });
