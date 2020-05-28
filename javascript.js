const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");
const beyond = document.querySelector("#beyond");
const greetingList = ["Hello", "Hi", "Hey there", "Yo"];
const greeting = Math.floor(Math.random() * greetingList.length); 

alert("Dear user, please refrain from using capital letters. To answer a question use y or n. Thank you") // pop up

submit.addEventListener("click", response); // button clicking

beyond.addEventListener("click", Beyond);

function Beyond (){
window.open("https://www.dndbeyond.com/")}

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
            user.style.color = "red";
            botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
            user.innerHTML = userInput.value;
            setTimeout(() => {botChat.innerHTML = "Do you like chocolate? Y or N" }, 2000);;
            userInput.value = null;
        } 
        
        while(botChat.textContent == "Do you like chocolate? Y or N") {
            user.style.color = "blue";
            if (userInput.value == "Y") {
                botChat.innerHTML = "Excellent!";
            }
            else if (userInput.value == "N") {
                botChat.textContent = "Pity";
            }
            else {
                botChat.textContent = "Please type Y or N.";
                setTimeout(() => {botChat.innerHTML = "Do you like chocolate? Y or N" }, 2000);;
            }
            setTimeout(() => {botChat.innerHTML = "Did you know warlocks have wisdom and charisma saving throws?" }, 2000);;
            userInput.value = null;}

        while(botChat.textContent == "Did you know warlocks have wisdom and charisma saving throws?") {
        if (userInput.value == "y") {
        botChat.innerHTML = "Excellent! well done";
        }
        else if (userInput.value == "n") {
        botChat.textContent = "Better remeber that when playing as a warlock.";
        }
        else {
        botChat.textContent = "Please type y or n.";
        setTimeout(() => {botChat.innerHTML = "Did you know warlocks have wisdom and charisma saving throws?" }, 2000);;
        submit.addEventListener("click", colour);}}}