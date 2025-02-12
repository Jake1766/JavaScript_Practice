// here are some basic problems found at 
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings
// I'll keep them all contained within seperate functions

console.log("script working!");
console.log(Math.random());



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
var computerChoice;

var playerScore;
var computerScore;

var outcome;



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

function generateComputerChoice(){
    number = randomInt(1, 3);
    switch(number){
        case 1:
            computerChoice = "Rock";
            break;
        
        case 2: 
            computerChoice = "Paper";
            break;

        case 3: 
            computerChoice = "Scissors";
            break;
        
            default: 
                console.log("error, rng computer choice match not found");

    }
    console.log(`Computer choice is ${computerChoice}`);
}   

function addToPlayerScore(int){
    playerScore += 1;
}

function addToComputerScore(int){
    computerScore += 1;
}

//calculates outcomes of choices
function compareRPS(playerChoice, computerChoice){
    //draw is easy, will do that first.

    if(playerChoice === computerChoice){
        outcome = "draw"
        console.log(outcome);
    }
}