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

//changes first square
function changeStyle() {
  if (sq1.style.backgroundColor == "red") {
    sq1.style.width = "70px";
    sq1.style.height = "100px";
    sq1.style.backgroundColor = "blue";
    sq1.style.margin = "10px";
  } else {
    sq1.style.width = "50px";
    sq1.style.height = "50px";
    sq1.style.backgroundColor = "red";
    sq1.style.margin = "10px";
  }
}

//changes second square
function changeStyle2() {
  if (sq2.style.backgroundColor == "red") {
    sq2.style.width = "70px";
    sq2.style.height = "100px";
    sq2.style.backgroundColor = "blue";
    sq2.style.margin = "10px";
  } else {
    sq2.style.width = "50px";
    sq2.style.height = "50px";
    sq2.style.backgroundColor = "red";
    sq2.style.margin = "10px";
  }
}

//changes last square
function changeStyle3() {
  if (sq3.style.backgroundColor == "red") {
    sq3.style.width = "70px";
    sq3.style.height = "100px";
    sq3.style.backgroundColor = "blue";
    sq3.style.margin = "10px";
  } else {
    sq3.style.width = "50px";
    sq3.style.height = "50px";
    sq3.style.backgroundColor = "red";
    sq3.style.margin = "10px";
  }
}
