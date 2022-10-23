const userInput = document.querySelector("#userInput");
var submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");

var question1 = "What is your name?"
var question2 = ""
var question3 = ""
var question4 = ""
var question5 = ""
var question6 = ""
var question7 = ""
// allows for easy question change

function getadvice(){
    w3.getHttpObject("https://api.adviceslip.com/advice", function (data){
        advice=data.slip.advice
        botChat.innerHTML = advice
});} // connection to AdviceApi

const greetingList = ["Hello", "Hi", "Hey there"];
const greeting = Math.floor(Math.random() * greetingList.length); // array for hellos

submit.addEventListener("click", response); // submit button

userInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("submit").click();
    }
  }); // enter keycode, sourced from MDN, allows the use of enter key


window.onload = function question () {
    botChat.textContent = question1; // establishes as question on window load
}  

function response() {
    while(botChat.textContent == question1) {
        botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
        user.innerHTML = userInput.value;
        setTimeout(() => {botChat.innerHTML = "Are you feeling stressed about NCEA?" }, 2000);;
        userInput.value = null; // says hello to the user and asks the 2nd question
    } 
        
    while(botChat.textContent == "Are you feeling stressed about NCEA?") {
        if (userInput.value == "yes") {
            botChat.innerHTML = "Its okay " + user.innerHTML + ", got this." // response if the user says yes
        }  
        else if (userInput.value == "no") {
            botChat.textContent = "Thats wonderful"; // if the user says no
        }
        else {
            botChat.textContent = "Please type yes or no.";
            setTimeout(() => {botChat.innerHTML = "Are you feeling stressed about NCEA?" }, 2000);; // if the user enters a unknown response
        }


    setTimeout(() => {botChat.innerHTML = "Have you considered how much time each task will take?" }, 2000);; // next question
    userInput.value = null;} // cleans the user input 


    while(botChat.textContent == "Have you considered how much time each task will take?") {
        if (userInput.value == "yes") {
            botChat.innerHTML = "Thats great.";
            userInput.value = null;
        }
    
        else if (userInput.value == "no") {
            botChat.textContent = "A to do list is the best for time management :)";
            userInput.value = null;
        }
      
        else {
            botChat.textContent = "Please type yes or no.";
            setTimeout(() => {botChat.innerHTML = "Have you considered how much time each task will take?" }, 2000);
            userInput.value = null;
        }
        

        setTimeout(() => {botChat.innerHTML = "Are you balancing more work than required?" }, 2000);; // next question ontime offset
        userInput.value = null;} // cleans the user input

        
        while(botChat.textContent == "Are you balancing more work than required?") {
            if (userInput.value == "no") {
                botChat.innerHTML = "Thats great " + user.innerHTML + "."; // inserts users inputed name, addresses user personally
                userInput.value = null;
            } 
            
            else if (userInput.value == "yes") {
                botChat.textContent = "I think its best to talk to your teachers to reduce your workload to a managable amount!";
                userInput.value = null;
            }

            else {
                botChat.textContent = "Please type yes or no.";
                setTimeout(() => {botChat.innerHTML = "Are you balancing more work than required?" }, 2000);
                 userInput.value = null;
            }                         
        

        setTimeout(() => {botChat.innerHTML = "Is there anything I didnt cover?" }, 2000); // next question
        userInput.value = null;} // cleans the user input
            
        
        while(botChat.textContent == "Is there anything I didnt cover?") {
            if (userInput.value == "no") {
                botChat.innerHTML = "Thats wonderfull!"
                userInput.value = null;
            } 
                      
            else if (userInput.value == "yes") {
                botChat.textContent = "I think its best to talk to your teachers, family, and friends as they know how best to help :)";
                userInput.value = null;
            }

            else {
                botChat.textContent = "Please type yes or no.";
                setTimeout(() => {botChat.innerHTML = "Is there anything I didnt cover?" }, 2000);
                userInput.value = null;
            }


        setTimeout(() => {botChat.innerHTML = "Advice from others can help you, did you want some?" }, 2000);; // next question
        userInput.value = null;} // cleans the user input
        

        while(botChat.textContent == "Advice from others can help you, did you want some?") {
            if (userInput.value == "no") {
                botChat.innerHTML = "Thats alright " + user.innerHTML + ", Ill see you another time :)";
                userInput.value = null;
            } 
            
            else if (userInput.value == "yes") {
                setTimeout(1000);
                window.print = getadvice(); // prints the advice slip function
                userInput.value = null;
                setTimeout(2000);
            }

            else {
                botChat.textContent = "Please type yes or no.";
                setTimeout(() => {botChat.innerHTML = "Advice from others can help you, did you want some?" }, 2000);;
                userInput.value = null;
            }


            setTimeout(() => {botChat.innerHTML = "Advice from others can help you, did you want some?" }, 2000);; // next question
            userInput.value = null;} // cleans the user input  
         
        }        

                    