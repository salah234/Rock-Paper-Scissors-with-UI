
let player1 = 0;
let player2 = 0;

function getComp() {
    const choices = ['rock', 'paper', 'scissors']
    let rand = Math.floor(Math.random() * choices.length)
    return choices[rand]
}
function roundWinner(player, computer) {
    if (player == computer) {
        return "TIE"
    }
    if ((player == 'rock' && computer == 'scissors') || 
        (player == 'paper' && computer == 'rock') || 
        (player == 'scissors' && computer == 'paper')) {
            player1++;
            return "Player1 wins round"
        } else {
            player2++;
            return "Player2 wins round"
        }
}
function findWinner() {
    if (player1 == 7) {
        alert('Player1 Wins')
        resetGame()
    } else if ( player2 == 7) {
        alert('Player2 Wins')
        resetGame()
    }
}
function resetGame() {
    player1 = 0
    player2 = 0
    document.querySelector('.PlayerScore').textContent = `Player Score: ${playerScore}`;
    document.querySelector('.ComputerScore').textContent = `Computer Score: ${computerScore}`;
}

// Event Listener for Interactivity for Game

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.getAttribute('data-choice')   // Gets data option from clicked button
        const compChoice = getComp()

        document.querySelector('.Player').textContent = `Player: ${userChoice}`
        document.querySelector('.Computer').textContent = `Computer: ${compChoice}`
        const res = roundWinner(userChoice, compChoice)
        alert(res)
        document.querySelector('.PlayerScore').textContent = `Player Score: ${player1}`;
        document.querySelector('.ComputerScore').textContent = `Computer Score: ${player2}`;
        findWinner()
    })
    
});