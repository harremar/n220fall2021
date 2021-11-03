//get elements in the HTML
let txtString = document.getElementById("txtString");
let dvMessage = document.getElementById("dvMessage");

//function that checks for bad words
function badwordCheck() {
  //gets the user's input
  let sentence = txtString.value;
  //when there is a space make it an element in the array
  let splitSentence = sentence.split(" ");
  //checking array and its elements
  console.log(splitSentence);

  //count how many bad words are found
  let count = 0;

  //loop that goes through all of the words
  for (let i = 0; i < splitSentence.length; i++) {
    //if word is clear water or tires...
    if (
      splitSentence[i] == "clear" ||
      splitSentence[i] == "water" ||
      splitSentence[i] == "tires"
    ) {
      console.log("found bad word");
      //add one to count
      count = count + 1;
    }
    console.log(splitSentence[i]);
  }
  //if count equals 0 no bad words were said
  if (count == 0) {
    //print in console and HTML
    console.log("No bad words were found");
    dvMessage.innerHTML = "No bad words were found";
  }
  //else a bad word was said
  else {
    //print in console and HTML
    console.log("Some bad words were found");
    console.log("There were " + count + " bad words");
    dvMessage.innerHTML =
      "Some bad words were found. There were " + count + " bad words.";
  }
  //reset txtString to empty
  txtString.value = " ";
}
