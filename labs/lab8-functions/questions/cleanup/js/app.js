//this gets the id from the html
let txtString = document.getElementById("txtString");
let dvMessage = document.getElementById("dvMessage");

// this function removes the character.
// when the button is clicked this function is called
function removeChar() {
  //gets user input
  originalString = txtString.value;

  //gets rid of all # in input uts it into new variable
  newString = originalString.replace(/\s*#/g, "", "");

  //prints out onto screen
  dvMessage.innerHTML = newString;
  //prints out onto console
  console.log(newString);
}
