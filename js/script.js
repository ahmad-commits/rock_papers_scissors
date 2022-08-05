let playerSelection = prompt("Rock, Paper or Scissors?");
playerSelection = playerSelection.toUpperCase();
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
const computerSelection = getComputerChoice(); 
function RockPaperScissors(playerSelection, computerSelection) {
    let Gameresult;
    if (playerSelection === computerSelection) {
        Gameresult = 0;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        Gameresult = 1;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        Gameresult = 2;
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        Gameresult = 1;
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        Gameresult = 2;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        Gameresult = 1;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        Gameresult = 2;
    return Gameresult;
}
}
function game() {
    for (let n = 0; n < 5; n++) {
        RockPaperScissors(playerSelection, computerSelection);
        if (Gameresult == 1) {
            console.log('Player Wins!');
        } else if (Gameresult == 2) {
            console.log('Computer Wins!');
        } else if (GameResult == 0) {
            console.log('Its A draw!');
        }
    }
}