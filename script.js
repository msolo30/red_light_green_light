//Starting scores 
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    if (playerScore >= 3 || computerScore >= 3) {
        return;
}