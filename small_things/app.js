// here are some basic problems found at 
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings
// I'll keep them all contained within seperate functions

console.log("script working!");
console.log(Math.random());
console.log(randomInt(4, 10))


function declaring_string(){
    const string = "this is a string!";
    console.log(string);
}

// Template literals are similar to fstrings in python
// they allow for embedded JS

function template_literal() {
    const word = "beep";
    console.log(`here is a word: ${word}`);

}

//Here are sme utility functions to be used in various small projects

//generates random integer between min and max (inclusive)
function randomInt(min, max){
    return Math.floor(((Math.random() * (max - min + 1)) + min))
}


// Below is all the functions for the rock paper scissors game contained in a class

const playerRockButton = document.querySelector("#playerSelectRock")
const playerPaperButton = document.querySelector("#playerSelectPaper")
const playerScissorsButton = document.querySelector("#playerSelectScissors")

var playerChoice;


// add event listeners
playerRockButton.addEventListener('click', function(){
    console.log("Rock selected")
    playerChoice = "Rock";
})
playerPaperButton.addEventListener('click', function(){
    console.log("Paper selected")
    playerChoice = "Paper"
})
playerScissorsButton.addEventListener('click', function(){
    console.log("Scissors selected");
    playerChoice = "Scissors";
})

function genrateComputerChoice(){
    number = Math.random()
}