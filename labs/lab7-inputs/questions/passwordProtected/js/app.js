let txtStringUsername = document.getElementById("txtStringUsername");
let txtStringPassword = document.getElementById("txtStringPassword");
let dvMessage = document.getElementById("dvMessage");

function submit(){
    //get the user input
    let name = txtStringUsername.value;
    let name2 = txtStringPassword.value;

    //variable options that might print out
    let success = "Yay Success!! :D";
    let wrong = "Wrong info :/";

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