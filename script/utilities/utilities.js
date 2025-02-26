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
  //   console.log(id, value);
  document.getElementById(id).innerText = value;
};

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
