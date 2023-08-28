//Step:1 Add event listener to the dipost button
document.getElementById("diposit-btn").addEventListener("click", function () {
  // Step:2 get the diposit amount from the diposit input field
  //   for input field use .value to the input value inside the input field
  const dipositIn = document.getElementById("dipositField");
  const currentDipositValue = dipositIn.value;
  const currentDipositValueInFloat = parseFloat(currentDipositValue);
  // Step:3 Get the current diposit total
  //   For non input value, use innerText to get the value
  const dipositShow = document.getElementById("dipositBoard");
  const previousDipoValue = dipositShow.innerText;
  const previousDipoValueInFloat = parseFloat(previousDipoValue);

  // Step:4 Add numbers to set the total diposit
  const newTotalDiposit = previousDipoValueInFloat + currentDipositValueInFloat;
  dipositShow.innerText = newTotalDiposit;

  //   Step:5 Get Balance Current total
  const valueOfBalanceBoard = document.getElementById("balanceBoard");
  const valueOfBalancePrevious = valueOfBalanceBoard.innerText;
  const valueOfBalancePreviousFloat = parseFloat(valueOfBalancePrevious);

  //  Step:6 Calculate current the total Balance
  const currentTotalValueOfBalance =
    currentDipositValueInFloat + valueOfBalancePreviousFloat;
  valueOfBalanceBoard.innerText = currentTotalValueOfBalance;

  //   Step:7 Clear the diposit field
  dipositIn.value = "";
});
