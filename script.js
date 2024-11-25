let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

const options = [
    'rock',
    'papper',
    'scissors'
];

let startButton = document.querySelector('#start');
let nextRoundButton = document.querySelector('#btn_nextRound');
let panel = document.querySelector('.option-panel');

startButton.addEventListener('click', () => startGame());

nextRoundButton.addEventListener('click', () => {
    roundNumber++;
    updateDisplayInfo();
    toogleElementVisibility('.option-panel');
    toogleElementVisibility('.next-panel');
})

panel.addEventListener('click', (event) => {
    let humanOption = options.findIndex(option => option === event.target.id);

    if (humanOption >= 0) {
        let humanChoice = getOption(humanOption);
        playRound(humanChoice);
    }
});

function startGame() {
    let initScreen = document.querySelector('.init');
    let gameScreen = document.querySelector('.game');

    initScreen.classList.toggle('hidden');
    gameScreen.classList.toggle('hidden');

    updateDisplayInfo();
}

function updateDisplayInfo(message = '') {
    let rounds = document.querySelector('#txt_roundNumber');
    let comScore = document.querySelector('#txt_comScore');
    let humScore = document.querySelector('#txt_youScore');
    let result = document.querySelector('#txt_rpsResult');

    rounds.textContent = roundNumber;
    comScore.textContent = computerScore;
    humScore.textContent = humanScore;
    result.textContent = message;
}

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
    let resultMessage = '';

    if (drawGame) {
        resultMessage ="Draw! No winner.";
        endRound();
        return updateDisplayInfo(resultMessage); 
    }

    if (isHumanWinner(humanChoice, computerChoice)) {
        humanScore++;
        resultMessage = `${humanChoice} beats ${computerChoice}, You Win.`;
    } else {
        computerScore++;
        resultMessage = `${computerChoice} beats ${humanChoice}, You Loose.`;
    }

    endRound();
    updateDisplayInfo(resultMessage); 
}

function endRound() {
    toogleElementVisibility('.option-panel');
    toogleElementVisibility('.next-panel');
}

function toogleElementVisibility(selector) {
    let element = document.querySelector(selector);
    element.classList.toggle('hidden');
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