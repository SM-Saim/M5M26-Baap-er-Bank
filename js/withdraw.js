//
// click hobe jekhane event haldler hobe sekane.
// Step:1 Add event haldler with the withdraw button
document.getElementById("withdraw-btn").addEventListener("click", function () {
  //   Step:2 Get the withdraw amount from the withdraw input field
  //   Also make sure to convert the input into a number by using parseFloat
  const valueOfWithdraw = document.getElementById("withDrawField");
  const valueOfWithdrawText = valueOfWithdraw.value;
  const valueOfWithdrawTextOfFloat = parseFloat(valueOfWithdrawText);

  //Validation
  if (isNaN(valueOfWithdrawTextOfFloat)) {
    alert("Enter Number as an input");
  }

  //   Step:3 Get previous withdraw
  const valueOfWithdrawPrevious = document.getElementById(
    "valueOfWithdrawBoard"
  );
  const valueOfWithdrawn = valueOfWithdrawPrevious.innerText;
  const valueOfWithdrawPreviousInFloat = parseFloat(valueOfWithdrawn);

  //   Step:5 Get the previous balance total
  const valueOfBalancePrevious = document.getElementById("balanceBoard");
  const valueOfBlanaceInString = valueOfBalancePrevious.innerText;
  const valueOfBalancePreviousInFloat = parseFloat(valueOfBlanaceInString);

  //Step:5 Clear the input after the input is given
  valueOfWithdraw.value = ""; //input field ta inpur dear por khali rakhar jonno
  // Validation
  if (valueOfBalancePreviousInFloat < valueOfWithdrawTextOfFloat) {
    alert("You have not that much in the bank ");
    return;
  }

  //   Step:4 calculate total withdraw amount of withdraw board
  const finalValueOfWithdraw =
    valueOfWithdrawTextOfFloat + valueOfWithdrawPreviousInFloat;
  valueOfWithdrawPrevious.innerText = finalValueOfWithdraw;

  //   Calculate the total balance after withdraw
  const valueOfBalanceAfterWithdrawl =
    valueOfBalancePreviousInFloat - valueOfWithdrawTextOfFloat;
  valueOfBalancePrevious.innerText = valueOfBalanceAfterWithdrawl;
});
