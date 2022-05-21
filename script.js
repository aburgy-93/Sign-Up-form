"use strict";

const createAccountButton = document.querySelector(".create-account");

const firstName = document.querySelector(".input-firstName");

createAccountButton.addEventListener("click", function () {
  let enterPassword = document.querySelector(".enterPassword").value;
  let confirmPassword = document.querySelector(".confirmPassword").value;

  if (enterPassword === "") {
    alert("Field Empty.");
  } else if (enterPassword != confirmPassword) {
    document.querySelector(".enterPassword").style.borderColor = "red";
    document.querySelector(".confirmPassword").style.borderColor = "red";
    document.querySelector(".no-match").style.color = "red";
  } else if (enterPassword === confirmPassword) {
    document.querySelector(".enterPassword").style.borderColor = "green";
    document.querySelector(".confirmPassword").style.borderColor = "green";
    alert("Logged In.");
  }

  console.log(enterPassword, confirmPassword);
});
