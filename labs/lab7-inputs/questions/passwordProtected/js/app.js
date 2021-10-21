let txtStringUsername = document.getElementById("txtStringUsername");
let txtStringPassword = document.getElementById("txtStringPassword");
let dvMessage = document.getElementById("dvMessage");

function submit(){
    //get the user input
    let name = txtStringUsername.value;
    let name2 = txtStringPassword.value;

    //variable options that might print out
    let success = correct(); //correct function is called
    let wrong = incorrect(); //incorrect function is called

    //test to see if both names equal eachother
    //also test to see if user input values into each feild
    if(name == name2 && name != "" && name2 != "") {
        //prints to console
        console.log(success)
        //prints to home screen
        dvMessage.innerHTML = success;
    }
    else {
        //prints to console
        console.log(wrong)
        //prints to home screen
        dvMessage.innerHTML = wrong;

    }
}
//function for incorrect message
function incorrect(){
    let wrongMessage = "Wrong info :/"
    return wrongMessage
}
//function for correct message
function correct(){
    let successMessage = "Yay Success!! :D"
    return successMessage
}