const rockBtn = document.querySelector('#rock'); 
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const scorePlayer = document.querySelector('#scorePlayer');
const scoreComputer = document.querySelector('#scoreComputer');
const winnerP = document.querySelector('#winner');
const finalScore = document.querySelector('#finalScore')

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

humanScore = 0;
computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if(humanSelection == computerSelection) {
        winnerP.textContent = `It's a tie you both chose ${humanSelection}`;
    } else if (humanSelection == 'rock' && computerSelection == 'scissors') {
        humanScore++;
        winnerP.textContent = `You win ${humanSelection} beats ${computerSelection}`;
        scorePlayer.textContent = humanScore
    } else if (humanSelection == 'paper' && computerSelection == 'rock') {
        humanScore++;
        winnerP.textContent = `You win ${humanSelection} beats ${computerSelection}`;
        scorePlayer.textContent = humanScore
    } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
        humanScore++;
        winnerP.textContent = `You win ${humanSelection} beats ${computerSelection}`;
        scorePlayer.textContent = humanScore;
    } else if (computerSelection == 'rock' && humanSelection == 'scissors') {
        computerScore++;
        winnerP.textContent = `You lose ${computerSelection} beats ${humanSelection}`;
        scoreComputer.textContent = computerScore;
    } else if (computerSelection == 'paper' && humanSelection == 'rock') {
        computerScore++;
        winnerP.textContent = `You lose ${computerSelection} beats ${humanSelection}`;
        scoreComputer.textContent = computerScore;
    } else if (computerSelection == 'scissors' && humanSelection == 'paper') {
        computerScore++;
        winnerP.textContent = `You lose ${computerSelection} beats ${humanSelection}`;
        scoreComputer.textContent = computerScore;
    }
    if(humanScore >= 5) {
        finalScore.textContent = 'Congratulations, you win!'
    } else if(computerScore >= 5) {
        finalScore.textContent = 'You lose, try again'
    }
}



rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'rock';
    playRound(humanSelection, computerSelection);
})

paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'paper';
    playRound(humanSelection, computerSelection);
})

scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'scissors';
    playRound(humanSelection, computerSelection);
})