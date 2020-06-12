const userInput = document.querySelector("#userInput");
var submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");
const beyond = document.querySelector("#beyond");
const hideandshow = document.querySelector("#showelement");

const greetingList = ["Hello", "Hi", "Hey there", "Yo"];
const greeting = Math.floor(Math.random() * greetingList.length); // array for hellos

alert("Dear user, please refrain from using capital letters. To answer a question use y or n. Scroll up and down the page to change background. Thank you") // instructions for use

submit.addEventListener("click", response); // submit button
beyond.addEventListener("click", Beyond); // button to open link to D&D Beyond
hideandshow.addEventListener("click", showElement); // button to hide {Name}

    function showElement (){
        if (user.style.display === "none") {
            user.style.display = "block";
        } else {
            user.style.display = "none";
        }
      } // button to hide {Name}, partcially sourced from w3schools

function Beyond (){
window.open("https://www.dndbeyond.com/classes/warlock")} // button to open link to D&D Beyond

window.onload = function question () {
    botChat.textContent = "What is your name?" // means that this question is the first question to show when the page is opened
}

userInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("submit").click();
    }
  }); // enter keycode, sourced from MDN

function response() {
        while(botChat.textContent == "What is your name?") {
            botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
            user.innerHTML = userInput.value;
            setTimeout(() => {botChat.innerHTML = "Did you know that warlocks can force a patron into a pact?" }, 2000);;
            userInput.value = null; // says hello to the user and asks the 2nd question
        } 
        
        while(botChat.textContent == "Did you know that warlocks can force a patron into a pact?") {
            if (userInput.value == "yes") {
                botChat.innerHTML = "Excellent!"; // response if the user says yes
            }
            else if (userInput.value == "no") {
                botChat.textContent = "Pity"; // if the user says no
            }
            else {
                botChat.textContent = "Please type yes or no.";
                setTimeout(() => {botChat.innerHTML = "Did you know that warlocks can force a patron into a pact?" }, 2000);; // if the user enters a unknown response
            }
            setTimeout(() => {botChat.innerHTML = "Did you know warlocks have wisdom and charisma saving throws?" }, 2000);; // next question
            userInput.value = null;} // cleans the user input

        while(botChat.textContent == "Did you know warlocks have wisdom and charisma saving throws?") {
        if (userInput.value == "yes") {
        botChat.innerHTML = "Excellent! well done.";
        setTimeout(() => {botChat.innerHTML = "Click submit or enter to ask me me your queries traveller." }, 2000);; // leads the user to go to the next question
        submit.addEventListener ("click", next) // changes where the submit takes you a different place
        userInput.value = null;}
    
        else if (userInput.value == "no") {
        botChat.textContent = "Better now then never.";
        setTimeout(() => {botChat.innerHTML = "Click submit or enter to ask me me your queries traveller." }, 2000);;
        submit.addEventListener ("click", next)
        userInput.value = null;}
      
        else {
        botChat.textContent = "Please type yes or no.";
                setTimeout(() => {botChat.innerHTML = "Did you know warlocks have wisdom and charisma saving throws?" }, 2000);;

        userInput.value = null;}
        }}
        
function next (){
while(botChat.textContent == "Enter a keyword for the information you seek dear traveller") {
    if (userInput.value == "profiency", "pro") {
    botChat.innerHTML = "oh dear me, thats a lot to talk about how about we narrow it down.";
    userInput.value = null;}

    if (userInput.value == "armor", "arm") {
    botChat.innerHTML = "Warlocks are proficient in light armour.";
    userInput.value = null;}

    else {
    setTimeout(() => {botChat.innerHTML = "Sorry, I dont know that one." }, 2000);;
    setTimeout(() => {botChat.innerHTML = "Try a different word or just the first 3 letters." }, 2000);;
    userInput.value = null;}}}