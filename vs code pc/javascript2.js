const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const beyond = document.querySelector ("#beyond")
const user = document.querySelector("#user"); 

window.onload = function question () {
    setTimeout(() => {botChat.innerHTML = "What is your query?" }, 3000);;
}

alert("alert")

submit.addEventListener("click", response);// clicking of the button
beyond.addEventListener("click", link);// clicking of the button

function link (){
window.open("https://www.dndbeyond.com/")} // opens a website

function response() {
    document.getElementById("user").style.display = "none";
    
    while(botChat.textContent == "What is your query?") {
        if (userInput = "")
        userInput.value = null;
    } }
