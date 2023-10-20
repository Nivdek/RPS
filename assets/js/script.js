/** User Input script */
let buttons = document.getElementsByTagName("button");
let userImage = document.getElementById("user-play");

buttons[0].addEventListener("click", rockSelect);
buttons[1].addEventListener("click", paperSelect);
buttons[2].addEventListener("click", scissorsSelect);

function rockSelect() {
    userImage.src = "assets/images/rock.jpg"
}
function paperSelect() {
    userImage.src = "assets/images/paper.jpg"
}
function scissorsSelect() {
    userImage.src = "assets/images/scissors.jpg"
}