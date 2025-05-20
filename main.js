const passwordField = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]<>?,.";

function generatePassword() {
  let chars = lowercase;
  if (uppercaseInput.checked) chars += uppercase;
  if (numbersInput.checked) chars += numbers;
  if (symbolsInput.checked) chars += symbols;

  const length = parseInt(lengthInput.value);
  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  passwordField.select();
  document.execCommand("copy");
});
