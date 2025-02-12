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

var playerScore = 0;
var computerScore = 0;

var outcome;



// add event listeners
playerRockButton.addEventListener('click', function(){
    console.log("Rock selected")
    playerChoice = "Rock";
    playRps(playerChoice);
})
playerPaperButton.addEventListener('click', function(){
    console.log("Paper selected")
    playerChoice = "Paper"
    playRps(playerChoice);
})
playerScissorsButton.addEventListener('click', function(){
    console.log("Scissors selected");
    playerChoice = "Scissors";
    playRps(playerChoice);
})

//returns computer choice as string i.e "Rock"
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
    return computerChoice;
}   

function addToPlayerScore(int){
    playerScore += 1;
}

function addToComputerScore(int){
    computerScore += 1;
}

// will write functions to update scores on doc here


//calculates outcomes of choices
//updates score based on result, returns nothing (is a void function)
function compareRPS(playerChoice, computerChoice){
    // general idea is to write 3 switch statements to 
    // calculate all possible combinations. Seems like a bad
    // way to do it, but a good place to start.
    console.log(`Player choice this round is: ${playerChoice}`);
    console.log(`Computer choice is: ${computerChoice}`);
    

    if (playerChoice == "Rock") {
        switch(computerChoice){
            case "Rock":
                console.log("result: draw");
                break

            case "Paper":
                console.log("player loses")
                addToComputerScore(1);
                break

            case "Scissors":
                console.log("player wins")
                addToPlayerScore();
                break
        }
    }

    if (playerChoice == "Paper") {
        switch(computerChoice){
            case "Rock":
                console.log("player wins");
                addToPlayerScore(1);
                break;

            case "Paper":
                console.log("result: draw")
                break;

            case "Scissors":
                console.log("player loses")
                addToComputerScore(1);
                break;
        }
    }

    if (playerChoice == "Scissors") {
        switch(computerChoice){
            case "Rock":
                console.log("player loses");
                addToComputerScore(1);
                break;

            case "Paper":
                console.log("player wins")
                addToPlayerScore(1);
                break;

            case "Scissors":
                console.log("draw")
                break;
        }
    }
    console.log(`Current score: \n Computer: ${computerScore} \n Player: ${playerScore}`);
}

function playRps(playerChoice){
    computerChoice = generateComputerChoice();
    compareRPS(playerChoice, computerChoice);
}