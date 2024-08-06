// Create a function named getComputerChoice
/* Write the code so that getComputerChoice will randomly return one of the 
following strings values: rock, paper or scissors*/
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());
// Create a function named getHumanChoice
/* Write the code so that getHumanChoice will return on of the valid choices
depending on what the user input*/
function getHumanChoice(){
    let userInput = prompt("Rock, Paper or Scissors");
    return userInput;
}


// Create a variable for humanScore in global scope
let humanScore = 0;
// Create a varable for computerScore in global scope
let computerScore = 0;
// Creat a function named  playRound
/* Define two parameters for playRound: humanChoice and computerChoice.
Use these two parameters to take the human and computer choices as arguments.*/
/* Make humanChoice function parameter case-insensitive so that players can input
"rock","ROCK","RoCk" or other variations.*/
/* Write the code for your playRound function to console.log a string value 
repreenting the round winner, such as "You lose! Paper beats Rock". */
// Increment the humanScore or computerScore variable based on th round winner
function playRound(humanChoice, computerChoice){
    const caseInSenHumanChoice = humanChoice.toLowerCase(); 
    const caseInSenComputerChoice = computerChoice.toLowerCase();

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
