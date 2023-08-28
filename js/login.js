//Step:1 add click event handler with the submit button
document.getElementById("submit-btn").addEventListener("click", function () {
  // get the email address inside the email input field
  // Always remember,  add .value to get the input value;
  const emailValue = document.getElementById("emailField");
  const inputvalue = emailValue.value;
  //   console.log(inputvalue);
  // Step:3
  // Get password
  // Set the id on the html elememt
  // Get the element
  // Get the value of the element
  const passwordValue = document.getElementById("user-password");
  const inputPasswordValue = passwordValue.value;
  //   console.log(inputPasswordValue);

  //   Step:4
  // Verify email and password and check wheater it is valid or not
  // DANGER: Do not verify email and password in his way
  if (inputvalue === "karimUddin@gmail.com" && inputPasswordValue === "123") {
    window.location.href = "bank.html";
  } else {
    alert("Wrong Password Or Eamil");
  }
});
