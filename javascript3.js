const userInput = document.querySelector("#userInput");
var submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");
const beyond = document.querySelector("#beyond");
const skip = document.querySelector("#skip");
const hideandshow = document.querySelector("#showelement");
const greetingList = ["Hello", "Hi", "Hey there", "Yo"];
const greeting = Math.floor(Math.random() * greetingList.length); 

alert("Dear user, please refrain from using capital letters. To answer a question use y or n. To add a splash of colour to your name tag click the colour button and scroll up and down the page to change background. Thank you") // pop up

submit.addEventListener("click", response); // button clicking
beyond.addEventListener("click", Beyond);
hideandshow.addEventListener("click", showElement);
skip.addEventListener("click", Skip);

 function Skip (){
setTimeout(() => {submit.addEventListener("click", next);}, 2000);;
skip.remove();}

    function showElement (){
        if (user.style.display === "none") {
            user.style.display = "block";
        } else {
            user.style.display = "none";
        }
      }
function Beyond (){
window.open("https://www.dndbeyond.com/classes/warlock")}

window.onload = function question () {
    botChat.textContent = "What is your name?"
}

userInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("submit").click();
    }
  }); // enter keycode - works as of 28/5

function response() {
        while(botChat.textContent == "What is your name?") {
            botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
            user.innerHTML = userInput.value;
            setTimeout(() => {botChat.innerHTML = "Did you know that warlocks can force a patron into a pact?" }, 2000);;
            userInput.value = null;
        } 
        
        while(botChat.textContent == "Did you know that warlocks can force a patron into a pact?") {
            if (userInput.value == "yes") {
                botChat.innerHTML = "Excellent!";
            }
            else if (userInput.value == "no") {
                botChat.textContent = "Pity";
            }
            else {
                botChat.textContent = "Please type yes or no.";
                setTimeout(() => {botChat.innerHTML = "Did you know that warlocks can force a patron into a pact?" }, 2000);;
            }
            setTimeout(() => {botChat.innerHTML = "Did you know warlocks have wisdom and charisma saving throws?" }, 2000);;
            userInput.value = null;}

        while(botChat.textContent == "Did you know warlocks have wisdom and charisma saving throws?") {
        if (userInput.value == "yes") {
        botChat.innerHTML = "Excellent! well done.";
        setTimeout(() => {botChat.innerHTML = "Click submit or enter to ask me me your queries traveller." }, 2000);;
        setTimeout(() => {submit.addEventListener ("click", next) }, 2000);;
        userInput.value = null;}
    
        else if (userInput.value == "no") {
        botChat.textContent = "Better now then never.";
        setTimeout(() => {botChat.innerHTML = "Click submit or enter to ask me me your queries traveller." }, 2000);;
        setTimeout(() => {submit.addEventListener ("click", next) }, 2000);;
        userInput.value = null;}
      
        else {
        botChat.textContent = "Please type yes or no.";
                setTimeout(() => {botChat.innerHTML = "Did you know warlocks have wisdom and charisma saving throws?" }, 2000);;

        userInput.value = null;}
        }}
function next (){
botChat.innerHTML = "hello";}
