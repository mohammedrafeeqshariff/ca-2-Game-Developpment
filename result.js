var total_score = document.getElementById("total_score");
var grade = document.getElementById("grade")
var playAgain = document.getElementById("play-again-button")
var go_home_button = document.getElementById("goHome") 

var myscore = localStorage.getItem("score");
total_score.textContent += myscore;

//this condition is to display the message according to the score of a player.
if (myscore < 3) {
    grade.innerHTML = "Work hard";
} else if (myscore <= 5) {
    grade.innerHTML = "Not bad";
} else if (myscore <= 8) {
    grade.innerHTML = "Awesome";
} else if (myscore <= 10) {
    grade.innerHTML = "Fantabulous";
} else {
    grade.innerHTML = "Invalid score";
}

//this event will return the player to the difficulty page when clicked
playAgain.addEventListener("click",()=>{
    window.location.href="difficulty.html"

})

// this event will return the user to the home page(details) when clicked
go_home_button.addEventListener("click",()=>{
    location.href="index.html"
})
