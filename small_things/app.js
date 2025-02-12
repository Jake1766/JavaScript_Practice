// here are some basic problems found at 
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings
// I'll keep them all contained within seperate functions

console.log("script working!");


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


// Below is all the functions for the rock paper scissors game contained in a class

const playerRockButton = document.querySelector("#playerSelectRock")
const playerPaperButton = document.querySelector("#playerSelectPaper")
const playerScissorsButton = document.querySelector("#playerSelectScissors")


// add event listeners
playerRockButton.addEventListener('click', function(){
    console.log("Rock selected")
})
playerPaperButton.addEventListener('click', function(){
    console.log("Paper selected")
})
playerScissorsButton.addEventListener('click', function(){
    console.log("Scissors selected")
})