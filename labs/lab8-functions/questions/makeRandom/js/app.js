let dvMessage = document.getElementById("dvMessage");

function generate() {
  //get the number from random function
  let number = random();
  //shows the random number in the console
  console.log(number);
  //shows random number on page
  dvMessage.innerHTML = number;
}

function random() {
  //generates random number 1 through 10
  randomNumber = Math.floor(Math.random() * 10 +1);
  return randomNumber;
}
