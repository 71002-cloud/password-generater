const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let generatebuttonEL = document.getElementById("generate-button-el");
let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");

generatebuttonEL.addEventListener("click", generatepasswords);

function generatepasswords() {
    function symbols() {
        for (let i = 0; i < characters.length; i++) {
            let randomindex = Math.floor(Math.random() * characters.length);
            let randomchar = characters[randomindex];
            return randomchar;
        }

    }

    password1El.textContent = symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols();
    password2El.textContent = symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols() + symbols();
}

// Google hjalp mig her fra og ned, tror nok ikke jeg kommer til at husk sårn noget i hovdet lige forløbende :)

function copyPasswordToClipboard(event) {
  const password = event.target.textContent;
  navigator.clipboard.writeText(password)
    .then(() => {
      alert("Password kopieret til udklipsholderen!🎉");
    })
    .catch(err => {
      console.error("Fejl ved kopiering:", err);
    });
}

password1El.addEventListener("click", copyPasswordToClipboard);
password2El.addEventListener("click", copyPasswordToClipboard);