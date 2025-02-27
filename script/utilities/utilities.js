function getInputValueById(id) {
  const value = document.getElementById(id).value;
  const convertedAmount = parseFloat(value);
  return convertedAmount;
}
function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}
const setInnerTextByIdAndValue = (id, value) => {
  document.getElementById(id).innerText = value;
};
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
const changeBoxstyle = (id, colorCode) => {
  document.getElementById(id).style.border = colorCode
  // document.getElementById(id).classList.add(colorCode);
};
const changeBoxstyleWithClassList = (id, classes) => {
  document.getElementById(id).classList.add(classes);
};
