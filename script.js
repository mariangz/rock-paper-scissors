"use strict"


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock");
}

//player selection
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    playRound("rock", computerPlay());

})

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    playRound("paper", computerPlay());
})

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", computerPlay());
})

//computer selection
function computerPlay(computerSelection) {
    computerSelection = Math.floor(Math.random() * 3);
    switch (computerSelection) {
        case 0:
            //console.log("rock");
            return "rock";
            break;
        case 1:
            //console.log("paper")
            return "paper";
            break;
        case 2:
            //console.log("scissors")
            return "scissors";
            break;
    }
}