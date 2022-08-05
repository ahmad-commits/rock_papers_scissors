function getComputerChoice() {
    let ComputerChoice;
    let RandomChoice = Math.floor(Math.random() * 11) -5;
    if (RandomChoice < 0) { RandomChoice = RandomChoice * (-1) - 1}; 
    if (RandomChoice == 0) { RandomChoice = RandomChoice + 5};
    if (RandomChoice == 5) {
        ComputerChoice = 'Rock';
    } else if (RandomChoice == 3 || RandomChoice == 4) {
        ComputerChoice = 'Paper';
    } else if (RandomChoice == 1 || RandomChoice == 2) {
        ComputerChoice = 'Scissors';
    };
    return ComputerChoice;
}