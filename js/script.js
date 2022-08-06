let playerSelection = prompt("Rock, Paper or Scissors?");
playerSelection = playerSelection.toUpperCase();
function getComputerChoice() {
    let computerSelection;
    let RandomChoice = Math.floor(Math.random() * 11) -5;
    if (RandomChoice < 0) { RandomChoice = RandomChoice * (-1) - 1}; 
    if (RandomChoice == 0) { RandomChoice = RandomChoice + 5};
    if (RandomChoice == 1) {
        computerSelection = 'ROCK';
    } else if (RandomChoice == 2 || RandomChoice == 4) {
        computerSelection = 'PAPER';
    } else if (RandomChoice == 5 || RandomChoice == 3) {
        computerSelection = 'SCISSORS';
    };
    return computerSelection;
}
let computerSelection = getComputerChoice(); 
function RockPaperScissors(playerSelection, computerSelection) {
    let Gameresult;
    if (playerSelection == computerSelection) {
        Gameresult = 0;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        Gameresult = 1;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        Gameresult = 2;
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        Gameresult = 3;
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        Gameresult = 4;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        Gameresult = 5;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        Gameresult = 6
    };
    return Gameresult;
}
function game() {
    for (let n = 0; n < 5; n++) {
        Gameresult = RockPaperScissors(playerSelection, computerSelection);
        computerSelection = getComputerChoice();
        (Gameresult == 0) ? console.log('its a draw') :
        (Gameresult == 1) ? console.log('Scissors cuts Paper, You win!') :
        (Gameresult == 2) ? console.log('Scissors cuts Paper, Computer wins!') :
        (Gameresult == 3) ? console.log('Paper beats Rock, You win!') :
        (Gameresult == 4) ? console.log('Paper beats Rock, Computer Wins!') :
        (Gameresult == 5) ? console.log('Rocks beats Scissors, You win!') :
        (Gameresult == 6) ? console.log('Rock beats Scissors, Computer wins!') :
        null;
    }
    return null;
}
game();