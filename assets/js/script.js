/** User Input script */
const buttons = document.querySelectorAll(".btn");
let userImage = document.getElementById("user-play").src;
let cpuImage = document.getElementById("cpu-play").src;
let gameText = document.getElementById("game-text");
let player;
let cpu;

/** Main Gameplay Loop */
buttons.forEach(button => button.addEventListener("click", () => {
    player = button.querySelector('span').textContent;
    userImage = button.querySelector('img').src;
    document.getElementById("user-play").src = userImage;
    cpuTurn();
    gameText.textContent  = checkWinner();
    scoreCounter();
}));

/** Function to run Computer choice */
function cpuTurn (){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber){
        case 1:
            cpu = "Rock";
            break;
        case 2:
            cpu = "Paper";
            break;
        case 3:
            cpu = "Scissors";
            break;
    }

    if (cpu === "Rock") {
        cpuImage = "assets/images/rock.jpg";
        document.getElementById("cpu-play").src = cpuImage;
    } else if (cpu === "Paper") {
        cpuImage = "assets/images/paper.jpg";
        document.getElementById("cpu-play").src = cpuImage;
    } else if (cpu === "Scissors") {
        cpuImage = "assets/images/scissors.jpg";
        document.getElementById("cpu-play").src = cpuImage;
    }
}


/** Function to compare options and determine a statement */
function checkWinner() {
    if(player == cpu) {
        return "Stalemate!";
    } else if(cpu == "Rock") {
        return (player == "Paper") ? "Victory!" : "Defeat!";
    } else if (cpu == "Paper") {
        return (player == "Scissors") ? "Victory!" : "Defeat!";
    } else if (cpu == "Scissors") {
        return (player == "Rock") ? "Victory!" : "Defeat!";
    }
}

/** Function to check who won and store it */
function scoreCounter() {
    if (gameText.textContent == "Victory!") {
        userWin();
    } else if (gameText.textContent == "Defeat!") {
        cpuWin();
    } 
}

/** Function to increase user score on win */
function userWin() {
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}

/** Function to increase cpu score on defeat */
function cpuWin() {
    let oldScore = parseInt(document.getElementById("cpu-score").innerText);
    document.getElementById("cpu-score").innerText = ++oldScore;
}