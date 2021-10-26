let txtString = document.getElementById("txtNum");
let dvMessage = document.getElementById("dvMessage");

function calculate() {
  //get the user input
  let number = txtNum.value;
  console.log(number);

  let divide = divisibleBy7(number);
  console.log(divide);
  //shows message on screen
  dvMessage.innerHTML = divide;
}

function divisibleBy7(number) {
  divide = number / 7;
  if (number % 7 == 0) {
    answer = divide + "  true";
  } else {
    answer = divide + "  false";
  }
  return answer;
}
