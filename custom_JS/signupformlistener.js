let useridInput = document.getElementById("userid");
let useridInput_feedback = document.getElementById("userid_feedback");
useridValid = function () {
  let valueInput = useridInput.value;
  let isValid = true;
  let errorMessage = "";
  
  // Check if input is empty
  if (!valueInput) {
    useridInput.classList.remove("green", "red");
    useridInput_feedback.textContent = "UserID is required.";
    return;
  }
  
  // Check length
  if (valueInput.length < 5 || valueInput.length > 12) {
    isValid = false;
    errorMessage = "ID must be between 5 and 12 characters long.";
  }

  // Check first letter
  if (!/^[A-Z]/.test(valueInput)) {
    isValid = false;
    errorMessage = "ID must start with a capital letter.";
  }

  // Check last letter
  if (!/[A-Za-z0-9]$/.test(valueInput)) {
    isValid = false;
    errorMessage = "ID must end with a number or special character.";
  }

  // Update class and feedback
  if (isValid) {
    useridInput.classList.add("green");
    useridInput.classList.remove("red");
    useridInput_feedback.textContent = "";
  } else {
    useridInput.classList.add("red");
    useridInput.classList.remove("green");
    useridInput_feedback.textContent = errorMessage;
  }
  return isValid
}
useridInput.addEventListener("input", function() {
  useridValid()
})

let passwordInput = document.getElementById("password");
let passwordInput_feedback = document.getElementById("password_feedback");
passwordValid = function() {
  let valueInput = passwordInput.value;
  let isValid = true;
  let errorMessage = "";
  
  // Check if input is empty
  if (!valueInput) {
    passwordInput.classList.remove("green", "red");
    passwordInput_feedback.textContent = "Password is required.";
    return;
  }
  
  // Check length
  if (valueInput.length < 12) {
    isValid = false;
    errorMessage = "Password must be at least 12 characters long.";
  }

  // Check for uppercase letters
  if (!/[A-Z]/.test(valueInput)) {
    isValid = false;
    errorMessage = "Password must include at least one uppercase letter.";
  }
  
  // Check for lowercase letters
  if (!/[a-z]/.test(valueInput)) {
    isValid = false;
    errorMessage = "Password must include at least one lowercase letter.";
  }
  
  // Check for numbers
  if (!/[0-9]/.test(valueInput)) {
    isValid = false;
    errorMessage = "Password must include at least one number.";
  }

  // Check for symbols
  if (!/[!@#$%^&*()]/.test(valueInput)) {
    isValid = false;
    errorMessage = "Password must include at least one symbol.";
  }


  // Update class and feedback
  if (isValid) {
    passwordInput.classList.add("green");
    passwordInput.classList.remove("red");
    passwordInput_feedback.textContent = "";
  } else {
    passwordInput.classList.add("red");
    passwordInput.classList.remove("green");
    passwordInput_feedback.textContent = errorMessage;
  }
  return isValid
}
passwordInput.addEventListener("input", function() {
  passwordValid()
})

let nameInput = document.getElementById("name");
let nameInput_feedback = document.getElementById("name_feedback");
nameValid = function() {
  let valueInput = nameInput.value;
  let isValid = true;
  let errorMessage = "";
  
  // Check if input is empty
  if (!valueInput) {
    nameInput.classList.remove("green", "red");
    nameInput_feedback.textContent = "Name is required.";
    return;
  }
  
  // Check if input contains only letters
  if (!/^[a-zA-Z]+$/.test(valueInput)) {
    isValid = false;
    errorMessage = "Name must contain alphabet only.";
  }

  // Update class and feedback
  if (isValid) {
    nameInput.classList.add("green");
    nameInput.classList.remove("red");
    nameInput_feedback.textContent = "";
  } else {
    nameInput.classList.add("red");
    nameInput.classList.remove("green");
    nameInput_feedback.textContent = errorMessage;
  }
  return isValid
}
nameInput.addEventListener("input", function() {
  nameValid()
})

let addressInput = document.getElementById("address");
let addressInput_feedback = document.getElementById("address_feedback");
addressInput.addEventListener("input", function() {
  let valueInput = useridInput_feedback.value;
})

let countryInput = document.getElementById("country");
let countryInput_feedback = document.getElementById("country_feedback");
countryValid = function() {
  let valueInput = countryInput.value;
  let isValid = true;
  let errorMessage = "";

  if (!valueInput) {
    countryInput.classList.remove("green", "red");
    countryInput_feedback.textContent = "Country is required.";
    return;
  }

  if (isValid) {
    countryInput.classList.add("green");
    countryInput.classList.remove("red");
    countryInput_feedback.textContent = "";
  } else {
    countryInput.classList.add("red");
    countryInput.classList.remove("green");
    countryInput_feedback.textContent = errorMessage;
  }
  return isValid
}
countryInput.addEventListener("input", function() {
  countryValid()
})

let zipInput = document.getElementById("zip");
let zipInput_feedback = document.getElementById("zip_feedback");
zipValid = function() {
  let valueInput = zipInput.value;
  let isValid = true;
  let errorMessage = "";
  
  // Check if input is empty
  if (!valueInput) {
    zipInput.classList.remove("green", "red");
    zipInput_feedback.textContent = "ZIP code is required.";
    return;
  }
  
  // Check length
  if (valueInput.length !== 6) {
    isValid = false;
    errorMessage = "ZIP code must be 6 characters long.";
  }

  // Check structure
  if (!/^[0-9]{4}[A-Za-z]{2}$/.test(valueInput)) {
    isValid = false;
    errorMessage = "ZIP code must consist of four numbers and two letters.";
  }

  // Update class and feedback
  if (isValid) {
    zipInput.classList.add("green");
    zipInput.classList.remove("red");
    zipInput_feedback.textContent = "";
  } else {
    zipInput.classList.add("red");
    zipInput.classList.remove("green");
    zipInput_feedback.textContent = errorMessage;
  }
  return isValid
}
zipInput.addEventListener("input", function() {
  zipValid()
})

let emailInput = document.getElementById("email");
let emailInput_feedback = document.getElementById("email_feedback");
emailValid = function() {
  let valueInput = emailInput.value;
  let isValid = true;
  let errorMessage = "";
  
  // Check if input is empty
  if (!valueInput) {
    emailInput.classList.remove("green", "red");
    emailInput_feedback.textContent = "Email is required.";
    return;
  }

  // Check if input is valid email address
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(valueInput).toLowerCase())) {
    isValid = false;
    errorMessage = "Invalid email format.";
  }

  // Update class and feedback
  if (isValid) {
    emailInput.classList.add("green");
    emailInput.classList.remove("red");
    emailInput_feedback.textContent = "";
  } else {
    emailInput.classList.add("red");
    emailInput.classList.remove("green");
    emailInput_feedback.textContent = errorMessage;
  }
  return isValid
}
emailInput.addEventListener("input", function() {
  emailValid()
})

let aboutInput = document.getElementById("about");
let aboutInput_feedback = document.getElementById("about_feedback");
aboutInput.addEventListener("input", function() {
  let valueInput = useridInput_feedback.value;
})

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting
  if (!(useridValid() && passwordValid() && nameValid() && countryValid() && zipValid() && emailValid())) {
    alert("form is incomplete")
  }

  let userid = document.getElementById("userid").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let country = document.getElementById("country").value;
  let zip = document.getElementById("zip").value;
  let email = document.getElementById("email").value;
  let sex = document.querySelector('input[name="sex"]:checked').value;
  let language = document.getElementById("language").value;
  let about = document.getElementById("about").value;

  let message = `User ID: ${userid}\nPassword: ${password}\nName: ${name}\nAddress: ${address}\nCountry: ${country}\nZIP Code: ${zip}\nEmail: ${email}\nSex: ${sex}\nLanguage: ${language}\nAbout/Bio: ${about}`;

  alert(message);
});
