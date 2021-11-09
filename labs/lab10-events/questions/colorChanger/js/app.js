//get elements from html
let square = document.getElementsByClassName("square");

//add on a listener to each square and add same styling
for (i = 0; i < square.length; i++) {
  square[i].addEventListener("click", changeColor);
  square[i].style.width = "200px";
  square[i].style.height = "200px";
  square[i].style.backgroundColor = "#444";
  square[i].style.display = "flex";
  square[i].style.float = "left";
  square[i].style.margin = "5px";
}

//when square is clicked
function changeColor(event) {
  //get the data attribute
  let response = event.target.getAttribute("data-response");
  //print out the data attribute into console
  console.log(response);
  //change the background color to the data attribute
  event.target.style.backgroundColor = response;
}
