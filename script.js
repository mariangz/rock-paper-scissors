"use strict"

//playround function
function playRound(playerSelection, computerSelection) {
    if ( (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ) {
        message("You", playerSelection, computerSelection);
        //console.log("gana player " + playerSelection + "gana a " + computerSelection);
    } else if (playerSelection == computerSelection) {
        message("It's a tie", playerSelection, computerSelection);
        //console.log("es un empate");
    } else {
        message("Computer", computerSelection, playerSelection);
        //console.log("gana computer");
    }
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

//message
function message(ganador, winner, looser) {
    const div = document.querySelector(".message");
    const paragraph = document.createElement("p");
        if (ganador === "It's a tie") {
            paragraph.textContent = `${ganador}. You chose ${winner} and computer chose ${looser} too.`;
        } else {
            paragraph.textContent = `${ganador} wins! ${winner} beats ${looser}`;
        }
    div.appendChild(paragraph);
}

