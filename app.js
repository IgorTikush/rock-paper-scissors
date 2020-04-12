function computePlay(){
  let number = Math.floor(Math.random() * 3) +1;
  if (number === 1) {
    return "rock"
  } else if (number === 2) {
    return "paper"
  } else if (number === 3) {
    return "scissors"
  }
 }
 let playerSelection = '';
 let playerScore = 0;
 let computerScore = 0

 function selection(e) {
    playerSelection = e.target.id
    round();
  }

  const scissors = document.getElementById('scissors');
  const rock = document.getElementById('rock');
  const paper = document.getElementById('paper');
  paper.addEventListener('click', selection);
  rock.addEventListener('click', selection);
  scissors.addEventListener('click', selection)
  

  
  
 function round() {
   let computerSelection = computePlay();
   document.getElementById('result').innerText = '';

  if (computerSelection === playerSelection) {
  return ('It\'s tie');
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
  computerScore++;
  
  } else if (computerSelection === "rock" && playerSelection === "paper") {
  playerScore++;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
  }
  document.getElementById('computer').innerText = computerScore;
  document.getElementById('player').innerText = playerScore;
  if (computerScore == 5 ) {
    document.getElementById('result').innerText = 'the winner is computer';
    endGame();
  }
  if (playerScore == 5 ) {
    document.getElementById('result').innerText = 'the winner is you';
    endGame();
  }
}

function endGame() {
  playerScore = 0;
  computerScore = 0;
  
}



 



