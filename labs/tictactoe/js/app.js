var grid = [
  [1, 2, 3],

  [4, 5, 6],

  [7, 8, 9],
];

marker1 = " ";
marker2 = " ";
marker3 = " ";
marker4 = " ";
marker5 = " ";
marker6 = " ";
marker7 = " ";
marker8 = " ";
marker9 = " ";

var userWin = 0;
var computerWin = 0;
var tieWin = 0;

console.log(grid);

let spot = document.getElementsByClassName("spot");
let background = document.getElementById("background");
let title = document.getElementById("title");
let winner = document.getElementById("winner");
let resetButton = document.getElementById("resetButton");
let user = document.getElementById("user");
let computer = document.getElementById("computer");
let tie = document.getElementById("tie");
let goameovercover = document.getElementById("gameovercover");

// resetButton.style.display = "none";

for (i = 0; i < spot.length; i++) {
  spot[i].addEventListener("click", spotClicked);
}

count = 0;
function spotClicked(event) {
  let answer = event.target.getAttribute("data-spot");

  if (event.target.innerHTML == "X" || event.target.innerHTML == "0") {
    console.log("nope stop taken");
  } else if (count % 2 == 0) {
    event.target.innerHTML = "X";
    event.target.style.color = "#633191";
    event.target.style.fontSize = "100px";
    event.target.style.justifyContent = "center";
    count = count + 1;
  } else {
    event.target.innerHTML = "O";
    event.target.style.color = "#316491";
    count = count + 1;
    // event.target.innerHTML = "O";
    event.target.style.fontSize = "100px";
    event.target.style.justifyContent = "center";
  }

  if (event.target.innerHTML == "O" && answer == grid[0][0]) {
    marker1 = "o";
  } else if (event.target.innerHTML == "O" && answer == grid[0][1]) {
    marker2 = "o";
  } else if (event.target.innerHTML == "O" && answer == grid[0][2]) {
    marker3 = "o";
  } else if (event.target.innerHTML == "O" && answer == grid[1][0]) {
    marker4 = "o";
  } else if (event.target.innerHTML == "O" && answer == grid[1][1]) {
    marker5 = "o";
  } else if (event.target.innerHTML == "O" && answer == grid[1][2]) {
    marker6 = "o";
  } else if (event.target.innerHTML == "O" && answer == grid[2][0]) {
    marker7 = "o";
  } else if (event.target.innerHTML == "O" && answer == grid[2][1]) {
    marker8 = "o";
  } else if (event.target.innerHTML == "O" && answer == grid[2][2]) {
    marker9 = "o";
  } else if (event.target.innerHTML == "X" && answer == grid[0][0]) {
    marker1 = "x";
  } else if (event.target.innerHTML == "X" && answer == grid[0][1]) {
    marker2 = "x";
  } else if (event.target.innerHTML == "X" && answer == grid[0][2]) {
    marker3 = "x";
  } else if (event.target.innerHTML == "X" && answer == grid[1][0]) {
    marker4 = "x";
  } else if (event.target.innerHTML == "X" && answer == grid[1][1]) {
    marker5 = "x";
  } else if (event.target.innerHTML == "X" && answer == grid[1][2]) {
    marker6 = "x";
  } else if (event.target.innerHTML == "X" && answer == grid[2][0]) {
    marker7 = "x";
  } else if (event.target.innerHTML == "X" && answer == grid[2][1]) {
    marker8 = "x";
  } else if (event.target.innerHTML == "X" && answer == grid[2][2]) {
    marker9 = "x";
  }

  //left to right YELLOW
  if (marker1 == "x" && marker2 == "x" && marker3 == "x") {
    player1();
  } else if (marker4 == "x" && marker5 == "x" && marker6 == "x") {
    player1();
  } else if (marker7 == "x" && marker8 == "x" && marker9 == "x") {
    player1();
  }

  //left to right BLUE
  else if (marker1 == "o" && marker2 == "o" && marker3 == "o") {
    player2();
  } else if (marker4 == "o" && marker5 == "o" && marker6 == "o") {
    player2();
  } else if (marker7 == "o" && marker8 == "o" && marker9 == "o") {
    player2();
  }

  //up and down YELLOW
  else if (marker1 == "x" && marker4 == "x" && marker7 == "x") {
    player1();
  } else if (marker2 == "x" && marker5 == "x" && marker8 == "x") {
    player1();
  } else if (marker3 == "x" && marker6 == "x" && marker9 == "x") {
    player1();
  }

  //up and down BLUE
  else if (marker1 == "o" && marker4 == "o" && marker7 == "o") {
    player2();
  } else if (marker2 == "o" && marker5 == "o" && marker8 == "o") {
    player2();
  } else if (marker3 == "o" && marker6 == "o" && marker9 == "o") {
    player2();
  }
  //diagonal YELLOW
  else if (marker1 == "x" && marker5 == "x" && marker9 == "x") {
    player1();
  } else if (marker3 == "x" && marker5 == "x" && marker7 == "x") {
    player1();
  }
  //diagonal BLUE
  else if (marker1 == "o" && marker5 == "o" && marker9 == "o") {
    player2();
  } else if (marker3 == "o" && marker5 == "o" && marker7 == "o") {
    player2();
  }

  //if all spots are filled
  else if (count == 9) {
    resetButton.style.display = "block";
    tieWin = tieWin + 1;
    console.log("tie");
  }
  user.innerHTML = "X: " + userWin;
  computer.innerHTML = "O: " + computerWin;
  tie.innerHTML = "Tie: " + tieWin;
}

function resetGame() {
  console.log("reset game");
  count = 0;

  marker1 = " ";
  marker2 = " ";
  marker3 = " ";
  marker4 = " ";
  marker5 = " ";
  marker6 = " ";
  marker7 = " ";
  marker8 = " ";
  marker9 = " ";

  for (i = 0; i < spot.length; i++) {
    spot[i].addEventListener("click", spotClicked);
    spot[i].style.background = "#fff";
    spot[i].innerHTML = " ";
  }
  winner.innerHTML = " ";
  resetButton.style.display = "none";
  goameovercover.style.display = "none";
}

function player1(event) {
  resetButton.style.display = "block";
  userWin = userWin + 1;
  goameovercover.style.display = "flex";
  console.log("PLayer 1 win");
}

function player2() {
  resetButton.style.display = "block";
  computerWin = computerWin + 1;
  console.log("Player 2 win");
  goameovercover.style.display = "flex";
  for (i = 0; i >= 9; i++) {
    marker[i] = "y";
  }
}
