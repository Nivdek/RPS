/** User Input script */
const buttons = document.querySelectorAll(".btn");
let userImage = document.getElementById("user-play").src;
let cpuImage = document.getElementById("cpu-play").src;
let gameText = document.getElementById("game-text");
let player;
let cpu;
let result;

buttons.forEach(button => button.addEventListener("click", () => {
    player = button.querySelector('p').textContent;
    userImage = button.querySelector('img').src;
    document.getElementById("user-play").src = userImage;
    cpuTurn()
    gameText.textContent  = checkWinner();
}));

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
        cpuImage = "assets/images/rock.jpg"
        document.getElementById("cpu-play").src = cpuImage;
    } else if (cpu === "Paper") {
        cpuImage = "assets/images/paper.jpg"
        document.getElementById("cpu-play").src = cpuImage;
    } else if (cpu === "Scissors") {
        cpuImage = "assets/images/scissors.jpg"
        document.getElementById("cpu-play").src = cpuImage;
    }
}

function checkWinner() {
    if(player == cpu) {
        return "Stalemate!"
    } else if(cpu == "Rock") {
        return (player == "Paper") ? "Victory!" : "Defeat!";
    } else if (cpu == "Paper") {
        return (player == "Scissors") ? "Victory!" : "Defeat!";
    } else if (cpu == "Scissors") {
        return (player == "Rock") ? "Victory!" : "Defeat!";
    }
}

