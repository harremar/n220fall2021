//get all of the elements from the html
let dvTotalTurns = document.getElementById("dvTotalTurns");
let dvresult = document.getElementById("dvresult");
let dvendgame = document.getElementById("dvendgame");
let card = document.getElementsByClassName("card");
var dvTime = document.getElementById("dvTime");

shufflecards();
startGame();
var totalSeconds = 0;
function startGame() {
  setInterval(setTime, 1000);
}

function setTime() {
  ++totalSeconds;
  dvTime.innerHTML = "Time: " + totalSeconds;
}

//adds a listener to add of the cards
for (i = 0; i < card.length; i++) {
  card[i].addEventListener("click", cardClicked);
}

//for each click
count = 0;
//for each 2 clicks equals one turn
turns = 25;
//matches found
matches = 0;

//check if card is clicked --Web Dev Junkie CREDIT
let clickedCard = null;
//check how many cards are showing.
let preventClick = false;

//when a card is clicked
function cardClicked(event) {
  const target = event.currentTarget;
  //if card is already clicked, has a class done, or 2 cards are already showing
  if (
    target == clickedCard ||
    target.className.includes("done") ||
    preventClick
  ) {
    return;
  }

  //get rid of hidecard to display frontside of card
  target.className = target.className.replace("hidecard", "").trim();
  //add class done. This is so card can't be clicked again til flipped back over
  target.className += " done";

  //if clickedCard is not clicked get target
  if (!clickedCard) {
    clickedCard = target;
  } else if (clickedCard) {
    //else check if both cards match
    cardMatch(target);
  }
  //count goes up by one for each click
  count = count + 1;
  console.log("this is count " + count);
  if (count % 2 == 0) {
    //turns goes down by one for every two clicks
    turns = turns - 1;
  }

  //print out how many turns have occured
  dvTotalTurns.innerHTML = "Turns left: " + turns;

  // player loses
  if (turns <= 0 && matches != 10) {
    dvresult.innerHTML = "You lose!";
    dvendgame.style.display = "flex";
    dvTime.style.display = "none";
    dvTotalTurns.style.display = "none";
  } else if (matches == 10) {
    dvresult.innerHTML = "You Win!";
    dvTime.style.display = "none";
    dvTotalTurns.style.display = "none";

    // dvendgame.style.display = "flex";
  }
}

//this is code for restarting the game

// let resetBtn = document.getElementById("resetBtn");
//adding a listener to resetBtn
// resetBtn.addEventListener("click", resetGame);

// function that checks if the cards match
function cardMatch(target) {
  if (
    //check if cards match
    clickedCard.getAttribute("data-dog") !== target.getAttribute("data-dog")
  ) {
    //prevent user from clicking another card. AKA showing 3 cards on screen. Only allow 2 at a time.
    preventClick = true;
    console.log("cards do not match!!");

    //card would flip over in half second
    setTimeout(() => {
      //remove class done and add hidecard class for both cards

      clickedCard.className =
        clickedCard.className.replace("done", "").trim() + " hidecard";
      target.className =
        target.className.replace("done", "").trim() + " hidecard ";
      clickedCard = null;
      //user can click another card
      preventClick = false;
    }, 500);
  } else {
    //cards do not flip over. The done class stays on.
    console.log("cards match");
    clickedCard = null;
    //user can click another card
    preventClick = false;
    //match points go up by one.
    matches = matches + 1;
  }
}
//If the reset button is clicked
function reset() {
  //checking for message if button is clicked
  console.log("reset button was clicked");
  //turns are back to 25
  turns = 25;
  totalSeconds = 0;
  dvTotalTurns.innerHTML = "Turns left: " + turns;
  dvTime.innerHTML = "Time: " + totalSeconds;
  dvTime.style.display = "flex";
  dvTotalTurns.style.display = "flex";

  //i'm sorry for this... :( only way i could figure it out...
  //lines 118 to 196 just gets the ids of all of the cards and resets the classList to begining property. Also removes the data attribute since shuffle would add new one on later...
  let element = document.getElementById("card1");
  element.classList = "card hidecard";
  element.removeAttribute("data-dog");

  let element2 = document.getElementById("card2");
  element2.classList = "card hidecard";
  element2.removeAttribute("data-dog");

  let element3 = document.getElementById("card3");
  element3.classList = "card hidecard ";
  element3.removeAttribute("data-dog");

  let element4 = document.getElementById("card4");
  element4.classList = "card hidecard";
  element4.removeAttribute("data-dog");

  let element5 = document.getElementById("card5");
  element5.classList = "card hidecard";
  element5.removeAttribute("data-dog");

  let element6 = document.getElementById("card6");
  element6.classList = "card hidecard";
  element6.removeAttribute("data-dog");

  let element7 = document.getElementById("card7");
  element7.classList = "card hidecard";
  element7.removeAttribute("data-dog");

  let element8 = document.getElementById("card8");
  element8.classList = "card hidecard";
  element8.removeAttribute("data-dog");

  let element9 = document.getElementById("card9");
  element9.classList = "card hidecard ";
  element9.removeAttribute("data-dog");

  let element10 = document.getElementById("card10");
  element10.classList = "card hidecard";
  element10.removeAttribute("data-dog");

  let element11 = document.getElementById("card11");
  element11.classList = "card hidecard";
  element11.removeAttribute("data-dog");

  let element12 = document.getElementById("card12");
  element12.classList = "card hidecard";
  element12.removeAttribute("data-dog");

  let element13 = document.getElementById("card13");
  element13.classList = "card hidecard";
  element13.removeAttribute("data-dog");

  let element14 = document.getElementById("card14");
  element14.classList = "card hidecard";
  element14.removeAttribute("data-dog");

  let element15 = document.getElementById("card15");
  element15.classList = "card hidecard";
  element15.removeAttribute("data-dog");

  let element16 = document.getElementById("card16");
  element16.classList = "card hidecard";
  element16.removeAttribute("data-dog");

  let element17 = document.getElementById("card17");
  element17.classList = "card hidecard";
  element17.removeAttribute("data-dog");

  let element18 = document.getElementById("card18");
  element18.classList = "card hidecard";
  element18.removeAttribute("data-dog");

  let element19 = document.getElementById("card19");
  element19.classList = "card hidecard";
  element19.removeAttribute("data-dog");

  let element20 = document.getElementById("card20");
  element20.classList = "card hidecard";
  element20.removeAttribute("data-dog");

  //shuffle the cards
  shufflecards();
  //invisible board disappears. players can click cards again
  dvendgame.style.display = "none";
  //dvresult disappears
  dvresult.innerHTML = " ";
}

//function reshuffles the cards
//got the shuffle code from WEB DEV JUNKIE
function shufflecards() {
  //make an array full of data attributes name
  const dogs = [
    "dog1",
    "dog2",
    "dog3",
    "dog4",
    "dog5",
    "dog6",
    "dog7",
    "dog8",
    "dog9",
    "dog10",
  ];
  //getting the list
  const cards = [...document.getElementsByClassName("card")];
  for (let dog of dogs) {
    //choose a random number 0 though 9
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    //get rid of number choosen
    cards.splice(cardAIndex, 1);
    //add to class name
    cardA.className += ` ${dog}`;
    //add a data attribute
    cardA.setAttribute("data-dog", dog);

    //same thing but for second card
    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${dog}`;
    cardB.setAttribute("data-dog", dog);
  }
}
