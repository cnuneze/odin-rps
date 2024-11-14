function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) % 3;

    switch (randomNumber) {
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