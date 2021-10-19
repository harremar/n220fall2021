let txtString = document.getElementById("txtString")
let dvMessage = document.getElementById("dvMessage")

function guess(){
    //number to guess to win
    let number = 17;
    //get the user input
    let numGuess = txtString.value;
    
    //if user guess correct number
    if(numGuess == number){
        //shows on screen
        dvMessage.innerHTML = "Nice Guess! You Win"
    }
    //if number is greater or equal to 20
    else if(numGuess >= 20){
        //shows on screen
        dvMessage.innerHTML = "Too high"
        //resets input
        txtString.value = " ";

    }
    //if number is less than or equal to 1
    else if(numGuess <= 1){
        //shows on screen
        dvMessage.innerHTML = "Too low"
        //resets input
        txtString.value = " ";

    }
    //if user is in the range
    else if(numGuess > 1 && numGuess < 20){
        //shows on screen
        dvMessage.innerHTML = "Not quite"
        //resets input
        txtString.value = " ";

    }
}