const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");
const colourrange = ["red", "yellow", "orange", "blue", "purple", "Red", "Yellow", "Orange", "Blue", "Purple"]

alert("Dear user, please refrain from using capital letters. To answer a question use y or n. Thank you")

submit.addEventListener("click", response);

const greetingList = ["Hello", "Hi", "Hey there", "Yo"];
const greeting = Math.floor(Math.random() * greetingList.length); 

function response(){
    (botChat.textContent == "What is your name?") 
    botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
    user.textContent = userInput;
    setTimeout(() => {botChat.innerHTML = "What is your favourite color?" }, 2000);;
    userInput.value = null;
    submit.addEventListener("click", colour);
    } 
const green = style.colour ("green")
const red = style.colour ("red")
function colour () {
    (botChat.textContent == "What is your favourite color?");
       if (userInput.value == "green", "Green") {
       	botChat.textContent = "Mine too";
	    user.style.colour = "green";
	    userInput.value = null;
        }
        else (userInput.value == colourrange) ;{
            botChat.textContent = "Pity, mines green.";
            user.style.colour = "userInput.value";
            userInput.value = null;
        }
        
}
    
