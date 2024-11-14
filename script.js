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
        humanScore++;
    } else {
        computerScore++;
    }

    let message = (humanWin) ?
        `${humanChoice} beats ${computerChoice}, You Win.` :
        `${computerChoice} beats ${humanChoice}, You Loose.`

    console.log(message);
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        displayScores();
    }

    displayFinalResult();
}

function displayFinalResult() {
    if (humanScore === computerScore) {
        console.log(`You draw ${humanScore} - ${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log(`You Win ${humanScore} - ${computerScore}`);
    } else {
        console.log(`You Loose ${humanScore} - ${computerScore}`);
    }
}

function displayScores() {
    console.log(`Scoreborad:
    Human: ${humanScore}
    Computer: ${computerScore}`
    );
}

playGame()