//get the elements from the HTML
let txtString = document.getElementById("txtString");
let dvMessage = document.getElementById("dvMessage");
let dvAnswer = document.getElementById("dvAnswer");

//function that checks for for answer
function getNumbers() {
  //function threeOnes is called
  let answer = threeOnes();

  //get a. a is either true or false
  let b = a;
  //print out in console and HTML
  console.log(b);
  dvAnswer.innerHTML = b;

  //txtString resets. Now empty
  txtString.value = " ";
}

//function that checks for three ones
function threeOnes() {
  //get the users input
  let numbers = txtString.value;
  //turn them into separate numbers in an array
  let splitNumbers = numbers.split(",");
  console.log(splitNumbers);

  //variable that would determine if Winner or not winner
  let one = 0;

  //loop that goes through all elements in the array
  for (let i = 0; i < splitNumbers.length; i++) {
    //see one number in array
    console.log(splitNumbers[i]);
    //see three numbers in array
    console.log(splitNumbers[i], splitNumbers[i - 1], splitNumbers[i - 2]);

    //checks if there are three 1s in a row
    if (
      splitNumbers[i] == 1 &&
      splitNumbers[i - 1] == 1 &&
      splitNumbers[i - 2] == 1
    ) {
      //if yes say this
      console.log("yay");
      //change variable to 1
      one = 1;
      //stop the loop
      break;
    }
  }
  //if one equals one they are a winner
  if (one == 1) {
    //print winner in HTML and console
    console.log("Winner");
    dvMessage.innerHTML = "Winner";

    //a is true. return to other function
    a = "true";
    return a;
  }
  //else they are not a winner
  else {
    //print not winner in HTML and console
    console.log("not winner");
    dvMessage.innerHTML = "not winner";
    //a is false. return to other function
    a = "false";
    return a;
  }
}
