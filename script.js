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
    updateChoices();
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

function updateChoices(humanChoice = '?', computerChoice = '?') {
    let humanChoiceText = document.querySelector('#txt_humanChoice');
    let computerChoiceText = document.querySelector('#txt_computerChoice');

    humanChoiceText.textContent = humanChoice;
    computerChoiceText.textContent = computerChoice;
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

    updateChoices(humanChoice, computerChoice);

    if (drawGame) {
        resultMessage ="Draw! No winner.";
        updateDisplayInfo(resultMessage); 
        return endRound();
    }

    if (isHumanWinner(humanChoice, computerChoice)) {
        humanScore++;
        resultMessage = `${humanChoice} beats ${computerChoice}, You Win.`;
    } else {
        computerScore++;
        resultMessage = `${computerChoice} beats ${humanChoice}, You Loose.`;
    }
    updateDisplayInfo(resultMessage);


    let isGameFinished = (computerScore >= 5 || humanScore >=5);

    if (isGameFinished) {
        return endGame();
    }
    
    endRound();
}

function endRound() {
    toogleElementVisibility('.option-panel');
    toogleElementVisibility('.next-panel');
}

function endGame(){
    toogleElementVisibility('.option-panel');
    humanWinGame = humanScore > computerScore;
    let message = humanWinGame ?
        `You Win ${humanScore} - ${computerScore}` :
        `You Loose ${humanScore} - ${computerScore}`;

    let finalMessage = document.querySelector('.txt_gameResult');
    finalMessage.textContent = message;
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