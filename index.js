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
        return "You win! Rock beats Scissors"
    } 
    if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats Rock"
    } 


    if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beat Paper"
    } 
    if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats Rock"
    } 


    if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beat Paper"
    } 
    if (playerSelection == "scissors" && computerSelection == "rock"){
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

