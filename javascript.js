const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");
const colourrange = ["red", "yellow", "orange", "blue", "purple", "Red", "Yellow", "Orange", "Blue", "Purple"]
const colourrandom = Math.floor(Math.random() * colourrange.length); 
const greetingList = ["Hello", "Hi", "Hey there", "Yo"];
const greeting = Math.floor(Math.random() * greetingList.length); 
const questionList = [yorn];
const question = Math.floor(Math.random() * questionList.length); 

alert("Dear user, please refrain from using capital letters. To answer a question use y or n. Thank you") // pop up

submit.addEventListener("click", response); // button clicking

userInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("submit").click();
    }
  }); // enter keycode - works as of 28/5
  
  window.onload = function response () {
      botChat.textContent = "What is your name"
  }


function response(){
    while (botChat.textContent == "What is your name?") 
    botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
    user.innerHTML = userInput.value;
    setTimeout(() => {botChat.innerHTML = "Did you know warlocks have wisdom and charisma saving throws?" }, 2000);;
    userInput.value = null;
    botChat.textContent = questionList[question]} // dosent continue to the next function

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
    submit.addEventListener("click", colour);}}} // error loops the first while loop and wont move on
   
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
    } // absolutly wont work