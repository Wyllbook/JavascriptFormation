const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&#'(-_é^$£è¤*]=+-*<>?!:;§";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
console.log(passwordOutput);

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUpperCase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);
  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }
  //on ne peut pas mettre de textContent ni d'innerHTML dans un input
  passwordOutput.value = password;

  passwordOutput.select();

  navigator.clipboard.writeText(password);

  generateButton.textContent = "Copié !";
  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
