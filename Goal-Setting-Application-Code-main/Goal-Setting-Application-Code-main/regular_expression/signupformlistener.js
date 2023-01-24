
function submitHandler(event) {
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
}