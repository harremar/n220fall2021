let txtStringUsername = document.getElementById("txtStringUsername");
let txtStringPassword = document.getElementById("txtStringPassword");
let dvMessage = document.getElementById("dvMessage");

function submit(){
    //get the user input
    let name = txtStringUsername.value;
    let name2 = txtStringPassword.value;
    //test to see if both names equal eachother
    //also test to see if user input values into each feild
    if(name == name2 && name != "" && name2 != "") {
        //prints to console
        console.log("Yay success!! :D")
        //prints to home screen
        dvMessage.innerHTML = "Yay success!! :D";
    }
    else {
        //prints to console
        console.log("Wrong info :/")
        //prints to home screen
        dvMessage.innerHTML = "Wrong info :/";

    }
}