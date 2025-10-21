let passwordLength = 15;
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

let passwordLengthEl = document.getElementById("password-length");
passwordLengthEl.addEventListener("input", (e) => {
     passwordLength = e.target.value;
});
let passwordEl1 = document.getElementById("password1");
let passwordEl2 = document.getElementById("password2");
let generateBtn = document.getElementById("generate-btn");
let copyBtn1 = document.getElementById("copy-password1");
let copyBtn2 = document.getElementById("copy-password2");

generateBtn.addEventListener("click", () => {
     let password1 = "";
     let password2 = "";

     for (let i = 0; i < passwordLength; i++) {
          let randomIndex = Math.floor(Math.random() * charset.length);
          password1 += charset.charAt(randomIndex);
     }
     for (let i = 0; i < passwordLength; i++) {
          let randomIndex = Math.floor(Math.random() * charset.length);
          password2 += charset.charAt(randomIndex);
     }

     passwordEl1.textContent = password1;
     passwordEl2.textContent = password2;
});

copyBtn1.addEventListener("click", () => {
     navigator.clipboard.writeText(passwordEl1.textContent);
     alert("Password 1 copied to clipboard!");
});
copyBtn2.addEventListener("click", () => {
     navigator.clipboard.writeText(passwordEl2.textContent);
     alert("Password 2 copied to clipboard!");
});

generateBtn.click(); // Generate passwords on load

