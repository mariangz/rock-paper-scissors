"use strict"

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
})

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
})

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
})

const computerBtn = document.querySelector("#computer");
computerBtn.addEventListener("click", computerPlay)

function playRound(playerSelection, computerSelection) {
    // your code here!
}

function playerSelection() {

}


function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    alert(randomNum);
    // switch (randomNum) {
    //     case 0:
    //         return "rock";
    //         break;
    //     case 1:
    //         return "paper";
    //         break;
    //     case 2:
    //         return "scissors";
    //         break;
    // }
}

