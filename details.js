var instructions = document.getElementById("instructions")
var instructions_button = document.getElementById("instructions_button")
var exit_button = document.getElementById("exit")
var next_btn = document.getElementById("button-1")
var inputElement = document.getElementById("inputElement")



// in this we are adding an Event to the instructions button so that when it is clicked, the instructions popup should display 
instructions_button.addEventListener("click",()=>{
    instructions.style.visibility = "visible"
})

// this is an event for the exit button inside the instructions box when it is clicked the instructions box display is set to "none" 
exit_button.addEventListener("click", ()=>{
    instructions.style.visibility = "hidden"
})


// this is anevent for the next button with a condition that when the user clicks the next button without any input  in 
//the input contaier an alert should appear showing to fill the input container  
next_btn.addEventListener("click",()=>{

    if (inputElement.value === null || inputElement.value.trim() === ""){
        alert("Enter your nick name to continue")
    }else{
    location.href="difficulty.html"
    }

})