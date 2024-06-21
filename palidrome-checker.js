//palidrome variables
const result = document.querySelector(".result");
const checkButton = document.querySelector(".checkButton");
const inputField = document.querySelector(".input-box");

//palidrome checker site
function checkWord() {
    let newWord = "";
    let word = inputField.value
        .toLowerCase()
        .split("")
        .filter((char) => {
            return /[a-zA-Z0-9]/.test(char);
        })
        .join("");
    console.log(word);
    newWord = word.split("").reverse().join("");
    if (word === newWord) {
        result.innerHTML = "";
        result.innerHTML = "This is a palidrome.";
    } else {
        result.innerHTML = "";
        result.innerHTML = "This is not a palidrome.";
    }
    console.log(newWord);
}

function loadTransition () {
    document.getElementById("body").setAttribute("style", "opacity: 1");
    document
        .getElementById("body")
        .setAttribute("style", "transform: translateY(0px)");
    document.getElementById("body").setAttribute("style", "transition: 1s");
}

checkButton.addEventListener("click", checkWord);
window.addEventListener("load", loadTransition);
