const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let generatebuttonEL = document.getElementById("generate-button-el");
let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let passwordLengthEl = document.getElementById("password-length-el");
let lengthDisplayEl = document.getElementById("length-display-el");

document.addEventListener("DOMContentLoaded", inputslider);

passwordLengthEl.addEventListener("input", inputslider);

function inputslider() {
  let value = Number(passwordLengthEl.value);

if (value >4 && value < 31) {
   lengthDisplayEl.textContent = value;
  }

  let percentageFilled = ((value - 5) / (30 - 5)) * 100;
  passwordLengthEl.style.background = `linear-gradient(to right, #55f991 0%, #55f991 ${percentageFilled}%, #273549 ${percentageFilled}%, #273549 100%)`;
}

generatebuttonEL.addEventListener("click", generatepasswords);


function symbols() {
  let randomindex = Math.floor(Math.random() * characters.length);
  let randomchar = characters[randomindex];
  return randomchar;
}


function passwordgenerator(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += symbols();
  }
  return password;
  }

function generatepasswords() {
  let passwordLength = Number(passwordLengthEl.value) || 15;
  password1El.textContent = passwordgenerator(passwordLength);
  password2El.textContent = passwordgenerator(passwordLength);
}

function copyPasswordToClipboard(event) {

  if (event.target.textContent === "Password") {
    alert("Generer venligst et kodeord først!⚠️");
  } else {

  const password = event.target.textContent;
  navigator.clipboard.writeText(password)
    .then(() => {
      alert(`"${password}" kopieret til udklipsholderen!🎉`);
    })
    .catch(err => {
      console.error("Fejl ved kopiering:", err);
    });
  }
}

password1El.addEventListener("click", copyPasswordToClipboard);
password2El.addEventListener("click", copyPasswordToClipboard);