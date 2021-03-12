"use strict"

let scorePlayer = 0;
let scoreComputer = 0;
const paragraph = document.querySelector(".paragraph");
const scoreYou = document.querySelector(".playerScore");
const scoreCom = document.querySelector(".computerScore");
const div = document.querySelector(".message");
const final = document.querySelector(".final");

//playround function
function playRound(playerSelection, computerSelection) {
    final.textContent = "";
    let scorePlayer = 0;
    let computerScore = 0;
    if ( (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ) {
        message("You", playerSelection, computerSelection);
        scoreP();
        reload();
    } else if (playerSelection == computerSelection) {
        message("It's a tie", playerSelection, computerSelection);
    } else {
        message("Computer", computerSelection, playerSelection);
        scoreC();
        reload();
    }
}

//player selection
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    const div = document.querySelector(".message");
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
        if (ganador === "It's a tie") {
            paragraph.textContent = `${ganador}. You chose ${winner} and computer chose ${looser} too.`;
        } else {
            paragraph.textContent = `${ganador} wins! ${winner} beats ${looser}`;
        }
}

//score
function scoreP() {
    scorePlayer++;
    
    scoreYou.textContent = scorePlayer;
}

function scoreC() {
    scoreComputer++;
    scoreCom.textContent = scoreComputer;
}

function reload() {
    if (scorePlayer == 5 || scoreComputer == 5) {
        final.textContent = "Game Over!"
        scoreComputer = 0;
        scorePlayer = 0;
        scoreYou.textContent = scorePlayer;
        scoreCom.textContent = scoreComputer;
    }
}
