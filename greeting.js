const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greetings = document.querySelector(".js-greetings"),
      delbtn = document.querySelector(".js-delbtn");

const USERNAME_LS = "currentuser";
const SHOWING_ON = "showing";

function saveName(text) {
    localStorage.setItem(USERNAME_LS,text);
}

function handleClick(event){
    localStorage.removeItem(USERNAME_LS);
    greetings.classList.remove(SHOWING_ON);
    delbtn.classList.remove(SHOWING_ON);
    input.value="";
    form.classList.add(SHOWING_ON);
}


function paintGreeting(text) {
    greetings.classList.add(SHOWING_ON);
    delbtn.value = "X";
    delbtn.classList.add(SHOWING_ON);
    delbtn.addEventListener("click", handleClick);
    greetings.innerText = `Hello ${text}`;
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    form.classList.remove(SHOWING_ON);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentuser = localStorage.getItem(USERNAME_LS);
    if(currentuser === null)
    {
        askForName();
    }else
    {
        paintGreeting(currentuser);
    }
}

function init() {
    loadName();
}   

init();