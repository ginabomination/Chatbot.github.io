const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");

alert("Dear user, please refrain from using capital letters. To answer a question use y or n. Thank you")

submit.addEventListener("click", response);

const greetingList = ["Hello", "Hi", "Hey there", "Yo"];
greeting = Math.floor(Math.random() * greetingList.length); 

function response(){
    (botChat.textContent == "What is your name?") 
    botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
    setTimeout(() => {botChat.innerHTML = "What is your favourite color?" }, 2000);;
    userInput.value = null;
    submit.addEventListener("click", colour);
    } 

    function colour () {

    while(botChat.textContent == "What is your favourite color?"){
       if (userInput.value == "green", "Green") {
       	botChat.textContent = "Mine too";
	user.style.colour = green;
	userInput.value = null;
        }
    }

