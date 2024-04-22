function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

humanScore = 0;
computerScore = 0;

const computerSelection = getComputerChoice();

function playGame () {
    for(i = 0; i < 5; i++){

        let humanSelection = prompt('rock, paper, scissors');

        function playRound(humanSelection, computerSelection) {
            if(humanSelection == computerSelection) {
                return `It's a tie you both chose ${humanSelection}`
            } else if (humanSelection == 'rock' && computerSelection == 'scissors') {
                humanScore++;
                return `You win! ${humanSelection} beats ${computerSelection}`;
            } else if (humanSelection == 'paper' && computerSelection == 'rock') {
                humanScore++;
                return `You win! ${humanSelection} beats ${computerSelection}`
            } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
                humanScore++;
                return `You win! ${humanSelection} beats ${computerSelection}`
            } else if (computerSelection == 'rock' && humanSelection == 'scissors') {
                computerScore++;
                return `You lose, ${computerSelection} beats ${humanSelection}`
            } else if (computerSelection == 'paper' && humanSelection == 'rock') {
                computerScore++;
                return `You lose, ${computerSelection} beats ${humanSelection}`
            } else if (computerSelection == 'scissors' && humanSelection == 'paper') {
                computerScore++;
                return `You lose, ${computerSelection} beats ${humanSelection}`
            }
        }
        console.log(humanSelection);
        console.log(computerSelection);
        console.log(playRound(humanSelection, computerSelection));
    }
}

playGame();

if(humanScore > computerScore) {
    console.log(`You win! your final score is ${humanScore}`);
} else {
    console.log(`You lose, computer final score is ${computerScore}`);
}