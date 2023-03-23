const fixTheName = document.getElementById("fixTheName");
const fixTheNumber = document.getElementById("fixTheNumber");
const fixTheMail = document.getElementById("fixTheMail");
const fixTheMessage = document.getElementById("fixTheMessage");
const fixTheError = document.getElementById("fixTheError");

function validName() {
  let name = document.getElementById("fname").value;
  if (name.length === 0) {
    fixTheName.innerHTML = "Name required";
    return false;
  }
  // The name should have two parts
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    fixTheName.innerHTML = "Write your full name";
    return false;
  }
  fixTheName.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validNumber() {
  let number = document.getElementById("number").value;
  if (number.length === 0) {
    fixTheNumber.innerHTML = "Phone number required";
    return false;
  }
  // The number should contain 10 characters
  if (!number.match(/^[0-9]{10}$/)) {
    fixTheNumber.innerHTML = "Write a valid number";
    return false;
  }
  fixTheNumber.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validMail() {
  let email = document.getElementById("email").value;
  if (email.length === 0) {
    fixTheMail.innerHTML = "Email address required";
    return false;
  }
  // The code to check the validation of the email address
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    fixTheMail.innerHTML = "Write a valid email";
    return false;
  }
  fixTheMail.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validMessage() {
  let message = document.getElementById("message").value;
  let required = 50;
  let left = required - message.length;
  if (left > 0) {
    fixTheMessage.innerHTML = left + " characters are left";
    return false;
  }
  fixTheMessage.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function submitMessage() {
  if (!validName() || !validNumber() || !validMail() || !validMessage()) {
    fixTheError.style.display = "block";
    fixTheError.innerHTML = "Fill in the fields, please!";
    // After three seconds the error message disappears
    setTimeout(function () {
      fixTheError.style.display = "none";
    }, 3000);
    return false;
  }
}
