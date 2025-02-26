const logonBtn = document.getElementById("login-btn");

logonBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const accountNumber = document.getElementById("account-number").value;
  const pin = document.getElementById("account-pin").value;
  const convertedPin = parseInt(pin);

  //   console.log(accountNumber, convertedPin);

  if (accountNumber.length === 11) {
    console.log("okay thik ache");
    if (convertedPin === 1234) {
      console.log("correct pin");
      window.location.href = "./main.html";
    } else {
      alert("wrong pin");
    }
  } else {
    console.log("no you typed wrong number");
  }
});
/////////////////////////////////////////////////////////////
// document.getElementById("login-btn").addEventListener("click", function (e) {
//   e.preventDefault();
//   const accountNumber = document.getElementById("account-number").value;
//   const pin = document.getElementById("account-pin").value;
//   const convertedPin = parseFloat(pin);
//   if (accountNumber.length === 11 && convertedPin === 12345) {
//     console.log("phone number is ok. you can navigate");
//     window.location.href = "/main.html";
//   } else {
//     // alert("phone number should be 11 in digits");
//     // alert("please type the right number");
//     alert("phone number is and pin number is not ok");
//   }
// });
