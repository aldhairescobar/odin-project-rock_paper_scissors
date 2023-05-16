const optionsToComputer = ['rock', 'paper', 'scissors']


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  let computerChoice = optionsToComputer[randomNumber]

  return computerChoice
}

function playRound(playerSelection, computerSelection){

  let playerSelectionLowerCase = playerSelection.toLowerCase();

  if(playerSelectionLowerCase === 'rock' && computerSelection === 'paper'){
    return 'You Lose! Paper beats Rock'
  } else if(playerSelectionLowerCase === 'rock' && computerSelection === 'scissors'){
    return 'You Won! Rock beats Scissors'
  } else if(playerSelectionLowerCase === 'paper' && computerSelection === 'rock') {
    return 'You Won! Paper beats Rock'
  } else if(playerSelectionLowerCase === 'paper' && computerSelection === 'scissors'){
    return 'You Lose! Scissors beats Paper'
  } else if(playerSelectionLowerCase === 'scissors' && computerSelection === 'rock'){
    return 'You Lose! Rock beats Scissors'
  } else if(playerSelectionLowerCase === 'scissors' && computerSelection === 'paper'){
    return 'You Won! Scissors beats Paper'
  } else {
    return 'Draw, try again!'
  }

}


const playerSelection = 'roCk';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));