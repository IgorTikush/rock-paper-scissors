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

 function round() {
   let computerSelection = computePlay();
   let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors" ) {


   if (computerSelection === playerSelection) {
  return ('It\'s tie');
} else if (computerSelection === "rock" && playerSelection === "scissors") {
  return ("computer wins");
} else if (computerSelection === "rock" && playerSelection === "paper") {
  return ("player wins");
} else if (computerSelection === "paper" && playerSelection === "scissors") {
  return ("player wins")
} else if (computerSelection === "paper" && playerSelection === "rock") {
  return ("computer wins")
} else if (computerSelection === "scissors" && playerSelection === "rock") {
  return ("player wins")
} else if (computerSelection === "scissors" && playerSelection === "paper") {
  return ("computer wins")
}
} else {
  alert("please insert rock paper or scissors")
  return round();
}} 


 function game () {
  let playerScore = 0;
  let computerScore = 0;
   for (let i =0;i<5;i++) {
     let roundScore = round()
     console.log(roundScore);
     if (roundScore === "player wins") {
       playerScore++;
       
     } else if (roundScore === "computer wins") {
       computerScore++;
       
     } else if (roundScore === 'It\'s tie') {
       
     } 
   }
   console.log(`Player has ${playerScore} points, computer has ${computerScore} points`)
 }

 game();