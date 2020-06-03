const userInput = document.querySelector("#userInput");
var submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");
const beyond = document.querySelector("#beyond");
const hideandshow = document.querySelector("#showelement");
const greetingList = ["Hello", "Hi", "Hey there", "Yo"];
const greeting = Math.floor(Math.random() * greetingList.length); 
const colourList = ["red", "orange", "yellow", "green", "blue", "purple",];
const color = Math.floor(Math.random() * colourList.length); 
const colourbutton = document.querySelector("#colour");

alert("Dear user, please refrain from using capital letters. To answer a question use y or n. Toadd a splash of colour  your name click the colour button. Thank you") // pop up

submit.addEventListener("click", response); // button clicking
beyond.addEventListener("click", Beyond);
hideandshow.addEventListener("click", showElement);
beyond.addEventListener("click", colour);


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

colourbutton.addEventListener("click", colour);
    function colour (){
        if (user.style.color === "none") {
            user.style.color = colourList[color];
        } else {
            user.style.color = null;
            user.style.color = colourList[color];
        }
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
            setTimeout(() => {botChat.innerHTML = "Did you know warlock spell attack modifiers are their proficiency bonus and their Charisma modifier?" }, 2000);;
            userInput.value = null;
        } 
        
        while(botChat.textContent == "Did you know warlock spell attack modifiers are their proficiency bonus and their Charisma modifier?") {
            if (userInput.value == "y") {
                botChat.innerHTML = "Excellent!";
            }
            else if (userInput.value == "n") {
                botChat.textContent = "Pity";
            }
            else {
                botChat.textContent = "Please type y or n.";
                setTimeout(() => {botChat.innerHTML = "Did you know warlock spell attack modifiers are their proficiency bonus and their Charisma modifier?" }, 2000);;
            }
            setTimeout(() => {botChat.innerHTML = "Did you know warlocks have wisdom and charisma saving throws?" }, 2000);;
            userInput.value = null;}

        while(botChat.textContent == "Did you know warlocks have wisdom and charisma saving throws?") {
        if (userInput.value == "y") {
        botChat.innerHTML = "Excellent! well done";
        setTimeout (function next () {botChat.textContent= "hello"}, 2000);
        userInput.value = null;}
    
        else if (userInput.value == "n") {
        botChat.textContent = "Better now then never.";
        userInput.value = null;}
      
        else {
        botChat.textContent = "Please type y or n.";
        setTimeout(() => {botChat.innerHTML = "Did you know warlocks have wisdom and charisma saving throws?" }, 2000);;;}}
        userInput.value = null;}

        function next (){botChat.textContent = "hello"}