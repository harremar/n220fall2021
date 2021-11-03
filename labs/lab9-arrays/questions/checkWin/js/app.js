//get the elements from the HTML
let txtString = document.getElementById("txtString");
let dvMessage = document.getElementById("dvMessage");

//function that checks for three ones
function check4ones() {
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
    //else they are not a winner
  } else {
    //print not winner in HTML and console
    console.log("not winner");
    dvMessage.innerHTML = "not winner";
  }
  //txtString resets. Now empty
  txtString.value = " ";
}
