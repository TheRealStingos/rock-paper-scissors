
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

let t = 0;
let p = 0;
let c = 0;

function tieIncrease(){
    const tieCount = document.querySelector('.tie-count')
    tieCount.value = t;
    t++;
}

function pIncrease(){
    const pCount = document.querySelector('.p-score')
    pCount.value = p;
    p++;
}

function cIncrease(){
    const cCount = document.querySelector('.c-score')
    cCount.value = c;
    c++;
}

function game() {
    if (`${p}` == 5 || `${c}` == 5) {
        console.log("Game Over!")
    }
}

function playRound(playerSelection,computerSelection){
    const result = checkWinner(playerSelection,computerSelection);
    if(result == "Tie"){
        const roundResult = document.querySelector('.result')
        roundResult.innerText = 'It\'s a Tie! No one wins!'
        tieIncrease()
        const tieCount = document.querySelector('.tie-count')
        tieCount.innerText = `Ties = ${t}`
    }
    else if(result == "Player"){
        const roundResult = document.querySelector('.result')
        roundResult.innerText = `Player wins! ${playerSelection} beats ${computerSelection}`
        pIncrease()
        const pCount = document.querySelector('.p-score')
        pCount.innerText = `Player Score = ${p}`
    }
    else{
        const roundResult = document.querySelector('.result')
        roundResult.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`
        cIncrease()
        const cScore = document.querySelector('.c-score')
        cScore.innerText = `Computer Score = ${c}`
    }
    game()
}

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

