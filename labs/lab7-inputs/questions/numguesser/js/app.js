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
        //correct function is called
        dvMessage.innerHTML = correct() 
    }
    //if number is greater or equal to 20
    else if(numGuess >= 20){
        //shows on screen
        //over function is called
        dvMessage.innerHTML = over()
        //resets input
        txtString.value = " ";

    }
    //if number is less than or equal to 1
    else if(numGuess <= 1){
        //shows on screen
        //under function is called
        dvMessage.innerHTML = under()
        //resets input
        txtString.value = " ";

    }
    //if user is in the range
    else if(numGuess > 1 && numGuess < 20){
        //shows on screen
        //notQuite function is called
        dvMessage.innerHTML = notQuite()
        //resets input
        txtString.value = " ";

    }
}

//function for correct answer
function correct(){ 
    let correctAnswer = "Nice Guess! You Win"
    return correctAnswer
}
//function for over range
function over(){ 
    let overAnswer = "Too high"
    return overAnswer
}
//function for under range
function under(){ 
    let underAnswer = "Too low"
    return underAnswer
}
//function if user is in range but wrong number
function notQuite(){ 
    let close = "Not Quite"
    return close
}
