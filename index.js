let buttons = document.querySelectorAll(".button");
let cpuScore = 0;
let playerScore = 0;

function computerPlay(){
    let x = Math.floor(Math.random() * 3);


    if (x == 0){
        return "rock"
    }
    if (x == 1){
        return "paper"
    }
    if (x == 2){
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection){
        return "Tie!"
    }

    if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore = ++playerScore
        keepPlayerScore()
        return "You win! Rock beats Scissors"
    } 
    if (playerSelection == "rock" && computerSelection == "paper"){
        cpuScore = ++cpuScore
        keepCpuScore()
        return "You lose! Paper beats Rock"
    } 


    if (playerSelection == "paper" && computerSelection == "scissors"){
        cpuScore = ++cpuScore
        keepCpuScore()
        return "You lose! Scissors beat Paper"
    } 
    if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore = ++playerScore
        keepPlayerScore()
        return "You win! Paper beats Rock"
    } 


    if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore = ++playerScore
        keepPlayerScore()
        return "You win! Scissors beat Paper"
    } 
    if (playerSelection == "scissors" && computerSelection == "rock"){
        cpuScore = ++cpuScore
        keepCpuScore()
        return "You lose! Rock beats Scissors"
    } 


}


function game(){

    let yourScore = 0;
    let compScore = 0;

    for(let x = 0; x < 5; x++){

        let playerSelection = prompt("Rock Paper Scissors ........ shoot!")
        playRound(playerSelection, computerPlay())

    } 

    if (yourScore > compScore){
        return "You won!"
    }
    else{
        return "You lost :("
    }

}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      playerSelection = img.alt.toLowerCase();
     
      playRound(playerSelection, computerPlay());
  
      //if (playerScore === 5 || computerScore === 5) {
        //declareWinner();

    });
  });

  function keepPlayerScore() {
    let playerScoreBox = document.querySelector("#player-score");
  
    playerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
  
    playerScoreBox.textContent = playerScore;
  }


  function keepCpuScore() {
    let computerScoreBox = document.querySelector("#computer-score");
  
    computerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
  
    computerScoreBox.textContent = cpuScore;
  }