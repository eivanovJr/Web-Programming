var time = new Date();

window.onload = function () {
    let curTime = new Date();
    let timer = document.getElementById("timer");
    timer.innerText = (curTime - time).toString() + "ms";

    let navElements = document.getElementsByClassName("nav-element");
    for (let i = 0; i < navElements.length; i++) {
        if (navElements[i].href === window.location.href)
            navElements[i].classList.add("selected");
    }
}
