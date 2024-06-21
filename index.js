function loadTransition() {
    document.getElementById("body").setAttribute("style", "opacity: 1");
    document
        .getElementById("body")
        .setAttribute("style", "transform: translateY(0px)");
    document.getElementById("body").setAttribute("style", "transition: 1s");
}

window.addEventListener("load", loadTransition);

