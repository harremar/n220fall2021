//this gets the elements by their IDS
let sq1 = document.getElementById("sq1");
let sq2 = document.getElementById("sq2");
let sq3 = document.getElementById("sq3");

//function squareStyle is called. Makes 3 different squares with same styling
squareStyle(sq1);
squareStyle(sq2);
squareStyle(sq3);

//this is the styling of the squares
function squareStyle(square) {
  square.style.width = "50px";
  square.style.height = "50px";
  square.style.backgroundColor = "red";
  square.style.margin = "10px";
}

//changes squares
function changeStyle(s) {
  if (s.style.backgroundColor == "red") {
    s.style.width = "70px";
    s.style.height = "100px";
    s.style.backgroundColor = "blue";
    s.style.margin = "10px";
  } else {
    s.style.width = "50px";
    s.style.height = "50px";
    s.style.backgroundColor = "red";
    s.style.margin = "10px";
  }
  return s;
}
