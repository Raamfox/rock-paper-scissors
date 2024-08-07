let humanScore = 0;
let computerScore = 0;
let gameScore = 0;

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1){
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice(){
    const userInput = prompt("Rock, Paper or Scissors").toLowerCase();

    if(userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        alert("Invalid choice")
        return getHumanChoice();
    }
}


function playRound(humanChoice, computerChoice){
    if(computerChoice === humanChoice){
        console.log(`Your choice was: --- ${humanChoice}`);
        console.log(`The computers choice was: --- ${computerChoice}`);
        console.log("It's a tie!");

    } if (humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "scissors" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "rock"){
        console.log(`Your choice was: --- ${humanChoice}`);
        console.log(`The computers choice was: --- ${computerChoice}`);
        console.log("Human win!");
        humanScore++;

    } if (computerChoice === "rock" && humanChoice === "scissors" || 
        computerChoice === "scissors" && humanChoice === "paper" || 
        computerChoice === "paper" && humanChoice === "rock"){
        console.log(`Your choice was: --- ${humanChoice}`);
        console.log(`The computers choice was: --- ${computerChoice}`);
        console.log("Computer win!");
        computerScore++;
        }
    console.log("Your Score: " + humanScore + " ComputerScore: " + computerScore);
}

function playGame(){
    for ( let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final Game Score: ${gameScore}`);
}

playGame();
