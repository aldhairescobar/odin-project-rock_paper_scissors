const optionsToComputer = ['rock', 'paper', 'scissors']


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  let computerChoice = optionsToComputer[randomNumber]

  return computerChoice
}