//get teh html elements
let state = document.getElementsByClassName("state");
let dvAnswer = document.getElementById("dvAnswer");

//loop that goes through each state
for (i = 0; i < state.length; i++) {
  console.log(state[i]);
  //adds a listener to the state
  state[i].addEventListener("click", showAnswer);
}

//function when one of the buttons are clicked
function showAnswer(event) {
  //get the data attribute
  let answer = event.target.getAttribute("data-answer");
  //print out answer in the console and html page
  console.log(answer);
  dvAnswer.innerHTML = answer;
}
