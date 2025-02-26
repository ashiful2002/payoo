const addMonetBtn = document.getElementById("add-money-btn");

addMonetBtn.addEventListener("click", function (e) {
  const amount = document.getElementById("amount").value;
  const convertedAmount = parseInt(amount);
  const pin = document.getElementById("pin").value;
  const convertedPin = parseInt(pin);
  const mainBalance = document.getElementById("main-balance").innerText;
  const convertedMainBalance = parseFloat(mainBalance);
  //   console.log(convertedAmount);
 
  //   console.log(convertedPin);
  if (convertedPin === 1234) {
    const sum = convertedMainBalance + convertedAmount;
    
    document.getElementById("main-balance").innerText = sum;
    alert(`balance addded successfully`);
  } else {
    alert("wrong pin entered");
  }
  e.preventDefault();
});
