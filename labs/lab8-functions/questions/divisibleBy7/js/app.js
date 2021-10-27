//this gets the ids in the html
let txtString = document.getElementById("txtNum");
let dvMessage = document.getElementById("dvMessage");
//this function calculates the number. Is called when button is clicked
function calculate() {
  //get the user input
  let number = txtNum.value;
  //shows number inuted in the console
  console.log(number);

  //divisible function is called
  let divide = divisibleBy7(number);
  //shows the result in the console
  console.log(divide);
  //shows message on screen
  dvMessage.innerHTML = divide;
}
//function that calulates divisiblilty
function divisibleBy7(number) {
  //calculate first
  divide = number / 7;
  //find if number is divisible by 7.
  //if it is do this
  if (number % 7 == 0) {
    answer = divide + "  true";
    //else do this
  } else {
    answer = divide + "  false";
  }
  //return the answer
  return answer;
}
