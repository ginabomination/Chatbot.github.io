const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");

alert("Dear user, please refrain from using capital letters. To answer a question use y or n. Thank you")

submit.addEventListener("click", response);

greetingList = ["Hello", "Hi", "Hey there", "Yo"];
greeting = Math.floor(Math.random() * greetingList.length);

function response()
const red = user.style.colour ("#DC143C")
const orange = user.style.colour ("#FF8C00")
const yellow = user.style.colour ("#FFD700")
const green = user.style.colour ("#7FFF00")
const blue = user.style.colour ("#228B22")
const purple = user.style.colour ("#8B008B") 
{
    (botChat.textContent == "What is your name?") {
    botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
    setTimeout(() => {botChat.innerHTML = "What is your favourite color?" }, 2000);;
    userInput.value = null;
    } 
    while(botChat.textContent == "What is your favourite color?"){
       if (userInput.value == "green", "Green") {
       	botChat.innerHTML = "Mine too";
	user.style.colour = green;
	userInput.value = null;
       }
    if (userInput.value == "red", "Red") {
        botChat.innerHTML = "Pity, mines green.";
	user.style.colour = red;
	userInput.value = null;
    }
        }
        else if (userInput.value == , "orange", "Orange", "yellow", "Yellow", "blue", "Blue", "purple", "Purple") {
            botChat.textContent = "Pity, mines green.";
        }
        else {
            botChat.textContent = "Please type a basic colour.";
            setTimeout(() => {botChat.innerHTML = "What is your favourite color?" }, 2000);;
        }
    }
}
