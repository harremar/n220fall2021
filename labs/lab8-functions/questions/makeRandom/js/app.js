//this gets the id in the html
let dvMessage = document.getElementById("dvMessage");

//function is called when button is clicked
function generate() {
  //get the number from random function
  let number = random();
  //shows the random number in the console
  console.log(number);
  //shows random number on page
  dvMessage.innerHTML = number;
}

//function that regerates random number
function random() {
  //generates random number 1 through 10
  randomNumber = Math.floor(Math.random() * 10 + 1);
  //return the random number
  return randomNumber;
}
