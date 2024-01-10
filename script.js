let tick = 0;
let cookieclicking = 0;
let button = document.querySelector("button");
const cookieButton = document.createElement("button");
cookieButton.textContent = "COOKIE CLICKER!!!";

function clickFunction(){
    button = document.querySelector(".clickme");
    if (tick < 3){
        tick++;
    }
    else{
        tick++;
    }
    if (tick == 3){
        alert("stop");
        button.textContent = "stop it";
        document.body.appendChild(cookieButton);
        cookieButton.classList.add("cookieclicker");
        cookieButton.onclick = cookieClick();
    }
    else{
        button.textContent = tick;
    }
}

function cookieClick(){
    button = document.querySelector(".cookieclicker");
    cookieclicking++;
    button.textContent = cookieclicking;
}