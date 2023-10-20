/** User Input script */
let buttons = document.getElementsByTagName("button");
let userPlay = document.getElementById("user-play");
let cpuPlay = document.getElementById("cpu-play");
let userValue = "";
let gameText = document.getElementsByClassName("game-text");

buttons[0].addEventListener("click", rockSelect);
buttons[1].addEventListener("click", paperSelect);
buttons[2].addEventListener("click", scissorsSelect);

//User input and value determiner
function rockSelect() {
    userPlay.src = "assets/images/rock.jpg"
    userValue = "R"
}
function paperSelect() {
    userPlay.src = "assets/images/paper.jpg"
    userValue = "P";
}
function scissorsSelect() {
    userPlay.src = "assets/images/scissors.jpg"
    userValue = "S"
}

// Computer Input and value determiner
let cpuImages = ["assets/images/rock.jpg", "assets/images/paper.jpg", "assets/images/scissors.jpg"];
let randomNumber = Math.floor(Math.random() *  3);
cpuPlay.src = cpuImages[randomNumber];
let cpuValue = ["R", "P", "S"][randomNumber];

// Score Evaluation 
let outcomes = {
    RR: "Stalemate!",
    RP: "Defeat!",
    RS: "Victory!",
    PR: "Victory!",
    PP: "Stalemate!",
    PS: "Defeat!",
    SR: "Defeat!",
    SP: "Victory!",
    SS: "Stalemate!",
};

let outcomeValue = outcomes[userValue + cpuValue];
