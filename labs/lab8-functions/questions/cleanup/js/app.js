let txtString = document.getElementById("txtString");
let dvMessage = document.getElementById("dvMessage");

//["A" ,"B" , "C" , "D"]
//"ABCD"

function removeChar() {
  //gets user input
  originalString = txtString.value;

  //gets rid of all # in input
  newString = originalString.replace(/\s*#/g, "", "");

  //prints out onto screen
  dvMessage.innerHTML = newString;
  //prints out onto console
  console.log(newString);
}
