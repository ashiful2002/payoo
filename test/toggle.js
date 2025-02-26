document.getElementById("ban-btn").addEventListener("click", function () {
  document.getElementById("ban").style.display = "block";
  document.getElementById("us").style.display = "none";
  document.getElementById("hide-btn").style.display = "flex";
});

document.getElementById("us-btn").addEventListener("click", function () {
  document.getElementById("ban").style.display = "none";
  document.getElementById("us").style.display = "block";
  document.getElementById("hide-btn").style.display = "block";

});
document.getElementById("hide-btn").addEventListener("click", function () {
  document.getElementById("ban").style.display = "none";
  document.getElementById("us").style.display = "none";
});
