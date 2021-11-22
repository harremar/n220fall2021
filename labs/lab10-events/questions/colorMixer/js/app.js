//get elemtents in the html
let colorDisplay = document.getElementById("colorDisplay");
let rgbColor = document.getElementById("rgbColor");
let colorChangers = document.getElementsByClassName("colorChangers");

//for loop that adds a listener and styling to every button
for (i = 0; i < colorChangers.length; i++) {
  console.log(colorChangers[i]);
  colorChangers[i].addEventListener("click", mixColor);
  colorChangers[i].style.width = "60px";
  colorChangers[i].style.height = "40px";
  colorChangers[i].style.backgroundColor = "#ccc";
  colorChangers[i].style.border = "#ccc solid 3px";
  colorChangers[i].style.color = "white";
}

//stating color values
red = 0;
green = 0;
blue = 0;

//div of the color display
colorDisplay.style.backgroundColor =
  "rgb(" + red + "," + green + "," + blue + ")"; //black- set color
colorDisplay.style.width = "500px";
colorDisplay.style.height = "150px";

//div of the current RGB
rgbColor.style.border = "#999 solid 3px";
rgbColor.style.width = "500px";
rgbColor.style.height = "50px";
rgbColor.style.marginTop = "50px";
rgbColor.style.color = "#999";
rgbColor.innerHTML =
  "current color: rgb(" + red + ", " + green + ", " + blue + ")";
rgbColor.style.textAlign = "center";

//function of mixColor
function mixColor(event) {
  //data attributes
  let plus = event.target.getAttribute("data-plus"); //amount of color added
  let color = event.target.getAttribute("data-color"); //the color

  //check what button was clicked with two data attributes
  console.log(plus + " " + color);

  //checking what color button was clicked
  if (color == "red") {
    //if red add the amount of other attruibute clicked
    red = red + Number(plus);
    console.log(red);
  }
  if (color == "green") {
    //if green add the amount of other attruibute clicked
    green = green + Number(plus);
    console.log(green);
  }
  if (color == "blue") {
    //if blue add the amount of other attruibute clicked
    blue = blue + Number(plus);
    console.log(blue);
  }

  //updates what is displayed on the page
  rgbColor.innerHTML =
    "current color: rgb(" + red + ", " + green + ", " + blue + ")";
  colorDisplay.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
}
