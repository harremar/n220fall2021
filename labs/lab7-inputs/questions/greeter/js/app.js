let txtString = document.getElementById("txtString")
let dvMessage = document.getElementById("dvMessage")

function sayHello(){
    //get the user input
    let name = txtString.value;
    //get the name and say hi to user
    let greeting = makeGreeting(name);
    //shows message in the console
    console.log(greeting);
    //shows message on screen
    dvMessage.innerHTML = greeting;
}

function makeGreeting(name){
    greeting = "Hello " + name
    return greeting
}