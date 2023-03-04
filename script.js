
const options = ["rock", "paper", "scissors"]
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const score = document.querySelector('.scoreboard')

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function checkWinner(playerSelection,computerSelection){
    if (playerSelection == computerSelection){
        return "Tie"
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player"
    }
    else {
        return "Computer"
    }
}

function playRound(playerSelection,computerSelection){
    const result = checkWinner(playerSelection,computerSelection);
    if(result == "Tie"){
        const p = document.createElement('p')
        p.innerText = 'It\'s a Tie! No one wins!'
        score.appendChild(p)
    }
    else if(result == "Player"){
        const p = document.createElement('p')
        p.innerText = `Player wins! ${playerSelection} beats ${computerSelection}`
        score.appendChild(p)
    }
    else{
        const p = document.createElement('p')
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`
        score.appendChild(p)
    }
}

// function game(){
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     console.log("Ready to play?")
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection,computerSelection));
//         if(checkWinner(playerSelection,computerSelection) == "Player"){
//             scorePlayer++;
//         } else if(checkWinner(playerSelection,computerSelection) == "Computer"){
//             scoreComputer++;
//         }
//     }
//     console.log("Game Over")
//     if(scorePlayer > scoreComputer){
//         console.log("You Win the game!)")
//     }
//     else if (scorePlayer < scoreComputer){
//         console.log("Sorry, you lose.")
//     }
//     else{
//         console.log("Tie!)")
//     }
// }

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection,computerSelection)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection,computerSelection)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection,computerSelection)
})