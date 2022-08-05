function getComputerChoice() {
    let computerSelection;
    let RandomChoice = Math.floor(Math.random() * 11) -5;
    if (RandomChoice < 0) { RandomChoice = RandomChoice * (-1) - 1}; 
    if (RandomChoice == 0) { RandomChoice = RandomChoice + 5};
    if (RandomChoice == 5) {
        computerSelection = 'Rock';
    } else if (RandomChoice == 3 || RandomChoice == 4) {
        computerSelection = 'Paper';
    } else if (RandomChoice == 1 || RandomChoice == 2) {
        computerSelection = 'Scissors';
    };
    return computerSelection;
}

function RockPaperScissors(playerSelection, computerSelection) {
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);    
    if (playerSelection === computerSelection) {
        console.log('Its a draw!');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log('Scissors beats Paper');
        console.log('Player wins!');
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        console.log('Scissors beats Paper');
        console.log('Computer wins!');
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('Paper beats Rock');
        console.log('Player wins!');
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log('Paper beats Rock');
        console.log('Computer wins!');
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log('Rock beats Scissors');
        console.log('Player wins!');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        console.log('Rock beats Scissors');
        console.log('Computer wins!');
    }
}