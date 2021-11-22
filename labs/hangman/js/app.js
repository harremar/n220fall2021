let head = document.getElementById("head");
let body = document.getElementById("body");
let rightarm = document.getElementById("rightarm");
let rightleg = document.getElementById("rightleg");
let leftarm = document.getElementById("leftarm");
let leftleg = document.getElementById("leftleg");

let result = document.getElementById("result");
let playAgain = document.getElementById("playAgain");

head.style.display = "none";
body.style.display = "none";
rightarm.style.display = "none";
rightleg.style.display = "none";
leftarm.style.display = "none";
leftleg.style.display = "none";

//these are the cateories
let categories = ["animals", "sports", "holidays"];

//these are animals
let animals = [
  "jaguar",
  "penguin",
  "lobster",
  "raccoon",
  "porcupine",
  "chicken",
  "tortuous",
  "squirrel",
  "butterfly",
  "narwhal",
];
//these are sports
let sports = [
  "basketball",
  "crosscountry",
  "tennis",
  "hockey",
  "rugby",
  "cricket",
  "track",
  "soccer",
  "softball",
  "boxing",
];
//these are holidays
let holidays = [
  "christmas",
  "halloween",
  "thanksgiving",
  "veteransday",
  "newyears",
  "easter",
  "cincodemayo",
  "stpatricksday",
  "honeybadger",
  "fathersday",
];

//getting the letters from html
let letter = document.getElementsByClassName("letter");

//amount of lives users have
var lives = 6;
let dvlives = document.getElementById("dvlives");
dvlives.innerHTML = "Lives: " + lives;
//checking for letters
found = 0;
allLetterFound = 1;

function random_category(categories) {
  return categories[Math.floor(Math.random() * categories.length)];
}
let secretCateory = 0;
secretCateory = random_category(categories);
console.log(secretCateory);
let category = document.getElementById("category");
category.innerHTML = "Category is " + secretCateory;
//function gets random animal from the list
if (secretCateory == "holidays") {
  function random_word(holidays) {
    return holidays[Math.floor(Math.random() * animals.length)];
  }
  secretWord = random_word(holidays);
  console.log(secretWord);
}
if (secretCateory == "animals") {
  function random_word(animals) {
    return animals[Math.floor(Math.random() * animals.length)];
  }
  secretWord = random_word(animals);
  console.log(secretWord);
}
if (secretCateory == "sports") {
  function random_word(sports) {
    return sports[Math.floor(Math.random() * animals.length)];
  }
  secretWord = random_word(sports);
  console.log(secretWord);
}
// function random_animal(animals) {
//   return animals[Math.floor(Math.random() * animals.length)];
// }
//see what animal is choosen

//array that would hold word length
var placeHolder = [];
//place blacks on the screen
for (var i = 0; i < secretWord.length; i++) {
  placeHolder.push("_");
}
console.log(placeHolder);
let currentGuess = document.getElementById("currentGuess");
currentGuess.innerHTML = placeHolder.join(" ");

//add a listener to all of the letters
for (i = 0; i < letter.length; i++) {
  letter[i].addEventListener("click", getLetter);
}
let lettersUsed = [];
function getLetter(event) {
  //restart found
  found = 0;
  //get the current target
  const target = event.currentTarget;
  let letterClicked = event.target.getAttribute("data-letter");
  // console.log(letterClicked);
  //checking what letter was clicked
  // console.log("Letter clicked: " + letterClicked);
  //if letter is clicked change color
  target.style.backgroundColor = "rgb(26, 26, 26)";
  target.style.color = "#999";
  //user can't click button
  target.setAttribute("disabled", true);

  //setting secret word
  let choosenAnimal = secretWord;

  //splitting word into characters
  let splitChar = choosenAnimal.split("");

  for (let i = 0; i < splitChar.length; i++) {
    let char = splitChar[i];
    console.log(char);
    //if char matches letter that was clicked
    if (char == letterClicked) {
      // console.log("Letter " + char + " was found! at spot " + i);
      //let placeholder spot equal letter clicked spot
      placeHolder[i] = splitChar[i];
      //replace blank with letter
      currentGuess.innerHTML = placeHolder.join(" ");
      // console.log(placeHolder);
      found = found + 1;
      //searches for underscore
      let position = currentGuess.innerHTML;
      // console.log(position);
      let positions = position.search("_");
      // console.log("Found _ at: " + positions);
      //if there is none Player wins
      if (positions == -1) {
        result.style.display = "flex";
        playAgain.style.display = "flex";
        result.innerHTML = "You Win :)";
      }

      //print out letter that matches and what spot
    } else {
      found = found;
    }
  }
  //if the user did guess a right letter
  if (found == 0) {
    console.log("off you lost a life :/"); //user loses a life
    //add another part of body here
    lives = lives - 1;
    dvlives.innerHTML = "Lives: " + lives;
    if (lives == 5) {
      head.style.display = "flex";
    } else if (lives == 4) {
      body.style.display = "flex";
    } else if (lives == 3) {
      rightarm.style.display = "flex";
    } else if (lives == 2) {
      leftarm.style.display = "flex";
    } else if (lives == 1) {
      rightleg.style.display = "flex";
    } else if (lives == 0) {
      leftleg.style.display = "flex";
      result.style.display = "flex";
      playAgain.style.display = "flex";
      result.innerHTML = "You Lose :(";
    }
  }
  //player loses
  if (lives == 0) {
    //show word on screen
    currentGuess.innerHTML = secretWord;
  }
}
