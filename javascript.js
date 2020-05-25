const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");
const colourrange = ["red", "yellow", "orange", "blue", "purple", "Red", "Yellow", "Orange", "Blue", "Purple"]
const colourrandom = Math.floor(Math.random() * colourrange.length); 
const greetingList = ["Hello", "Hi", "Hey there", "Yo"];
const greeting = Math.floor(Math.random() * greetingList.length); 

alert("Dear user, please refrain from using capital letters. To answer a question use y or n. Thank you")

function enter(e){
    if(e.keyCode === 13){
        e.preventDefault();
submit.addEventListener("click", response);

function response(){
    (botChat.textContent == "What is your name?") 
    botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
    user.innerHTML = userInput.value;
    setTimeout(() => {botChat.innerHTML = "Did you know warlocks have wisdom and charisma saving throws?" }, 2000);;
    userInput.value = null;}
    
function yorn () {
    while(botChat.textContent == "Did you know warlocks have wisdom and charisma saving throws?") {
            user.style.color = colourrange[colourrandom];
            if (userInput.value == "y") {
                botChat.innerHTML = "Excellent! well done";
            }
            else if (userInput.value == "n") {
                botChat.textContent = "Better remeber that when playing as a warlock.";
            }
            else {
                botChat.textContent = "Please type y or n.";
                setTimeout(() => {botChat.innerHTML = "Did you know warlocks have wisdom and charisma saving throws?" }, 2000);;
                submit.addEventListener("click", colour);
            }
        }
    }
   
function colour () {

    const green = style.colour ("green")
    const red = style.colour ("red")
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