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
        return null;
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

function playRound(humanChoice, computerChoice) {

    if (humanChoice === null) {
        return;
    }

    let humanWin = false

    if (humanChoice === computerChoice) {
        console.log("Draw! No winner.");
        return;
    }

    switch (humanChoice) {
        case "Rock":
            humanWin = (computerChoice === "Scissors");
            break;

        case "Papper":
            humanWin = (computerChoice === "Rock");
            break;
        
        case "Scissors":
            humanWin = (computerChoice === "Papper");
            break;
    
        default:
            break;
    }

    if (humanWin) {
        humanWin++;
    } else {
        computerScore++;
    }

    let message = (humanWin) ?
        `${humanChoice} beats ${computerChoice}, You Win.` :
        `${computerChoice} beats ${humanChoice}, You Loose.`

    console.log(message);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);