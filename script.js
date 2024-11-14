let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) % 3;

    return getOption(randomNumber);
}

function getHumanChoice() {
    console.log(`Select your choice:
        1. Rock
        2. Papper
        3. Scissors
    `);
    
    let humanChoice = parseInt(prompt("Input the number of your choice:"));

    if (isNaN(humanChoice) || humanChoice > 4 || humanChoice < 0) {
        console.log("The selected option is invalid.")
        return;
    }

    return getOption(humanChoice - 1);
}

function getOption(option) {
    switch (option) {
        case 0:
            return 'Rock'
        
        case 1:
            return 'Papper'
        
        case 2:
            return 'Scissors'
            
        default:
            break;
    }
}