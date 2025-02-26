document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "block";
  document.getElementById("cash-out").style.display = "none";
});
document.getElementById("cash-out-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "block";
});

// log out toggle

document.getElementById("log-out-btn").addEventListener("click", function () {
  const promptData = prompt("type 'yes' to log out");
  if (promptData === "yes") {
    window.location.href = "./index.html";
  }
});
