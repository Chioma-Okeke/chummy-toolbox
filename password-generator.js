const passwordField = document.querySelector(".password-field");
const generateButton = document.querySelector("#generate-password");
const copyButton = document.querySelector("#copy-password");
const copyConfirmation = document.querySelector(".copy-confirmation");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*(){}[]|<>/_-=+~";
const allChars = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordField.value = password;
}

function copyPassword() {
    if (passwordField.value === "") {
        copyConfirmation.innerHTML = "Nothing to copy";
        setTimeout(() => {
            copyConfirmation.innerHTML = "";
        }, 2000);
        return;
    } else {
        if (!navigator.clipboard) {
            passwordField.select();
            document.execCommand("copy");
        } else {
            navigator.clipboard
                .writeText(passwordField.value)
                .then(function () {
                    copyConfirmation.innerHTML = "Copied!";
                    setTimeout(() => {
                        copyConfirmation.innerHTML = "";
                    }, 2000);
                })
                .catch(function () {
                    copyConfirmation.innerHTML = "Error when copying";
                    setTimeout(() => {
                        copyConfirmation.innerHTML = "";
                    }, 2000);
                });
        }
    }
}

function loadTransition () {
    document.getElementById("body").setAttribute("style", "opacity: 1");
    document
        .getElementById("body")
        .setAttribute("style", "transform: translateY(0px)");
    document.getElementById("body").setAttribute("style", "transition: 1s");
}

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);
window.addEventListener("load", loadTransition);
