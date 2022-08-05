function getComputerChoice() {
    let computerSelection;
    let RandomChoice = Math.floor(Math.random() * 11) -5;
    if (RandomChoice < 0) { RandomChoice = RandomChoice * (-1) - 1}; 
    if (RandomChoice == 0) { RandomChoice = RandomChoice + 5};
    if (RandomChoice == 5) {
        computerSelection = 'ROCK';
    } else if (RandomChoice == 3 || RandomChoice == 4) {
        computerSelection = 'PAPER';
    } else if (RandomChoice == 1 || RandomChoice == 2) {
        computerSelection = 'SCISSORS';
    };
    return computerSelection;
}

function RockPaperScissors(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);    
    if (playerSelection === computerSelection) {
        console.log('Its a draw!');
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        console.log('SCISSORS beats PAPER');
        console.log('Player wins!');
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        console.log('SCISSORS beats PAPER');
        console.log('Computer wins!');
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        console.log('PAPER beats ROCK');
        console.log('Player wins!');
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        console.log('PAPER beats ROCK');
        console.log('Computer wins!');
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        console.log('ROCK beats SCISSORS');
        console.log('Player wins!');
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        console.log('ROCK beats SCISSORS');
        console.log('Computer wins!');
    }
}