let humanScore = 0;
let computerScore = 0;

let panel = document.querySelector('.option-panel');
const options = [
    'rock',
    'papper',
    'scissors'
];

panel.addEventListener('click', (event) => {
    let humanOption = options.findIndex(option => option === event.target.id);

    if (humanOption >= 0) {
        let humanChoice = getOption(humanOption);
        playRound(humanChoice);
    }
})

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) % 3;

    return getOption(randomNumber);
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

function playRound(humanChoice) {

    let computerChoice = getComputerChoice();
    let drawGame = humanChoice === computerChoice;
    let humanWin = isHumanWinner(humanChoice, computerChoice);
    let resultMessage = '';

    if (drawGame) {
        resultMessage ="Draw! No winner.";
        return updateDisplay(resultMessage); 
    }

    if (humanWin) {
        humanScore++;
    } else {
        computerScore++;
    }

    resultMessage = (humanWin) ?
        `${humanChoice} beats ${computerChoice}, You Win.` :
        `${computerChoice} beats ${humanChoice}, You Loose.`;
    
    return updateDisplay(resultMessage); 
}

function isHumanWinner(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "Rock":
            return (computerChoice === "Scissors");

        case "Papper":
            return (computerChoice === "Rock");

        case "Scissors":
            return (computerChoice === "Papper");
    
        default:
            return false
    }
}

function updateDisplay(message = '') {
    let comScore = document.querySelector('#txt_comScore');
    let humScore = document.querySelector('#txt_youScore');
    let result = document.querySelector('#txt_rpsResult');

    comScore.textContent = computerScore;
    humScore.textContent = humanScore;
    result.textContent = message;
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