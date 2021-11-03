//get elements from html
let txtString = document.getElementById("txtString");
let dvPrint = document.getElementById("dvPrint");

//this is the array of objects
let objects = [
  { color: "#FF0000", height: 100, width: 300 },

  { color: "#FFFF00", height: 200, width: 200 },

  { color: "#ff0000", height: 300, width: 100 },
];

//this is functin that prints out list
function doThing() {
  //for loop goes until it goes through all of the objects
  for (var i = 0; i < objects.length; i++) {
    //creates a new div
    let newEl = document.createElement("div");
    //what is in the innerHTML
    newEl.innerHTML =
      "color: " +
      objects[i].color +
      " height: " +
      objects[i].height +
      " width: " +
      objects[i].width;
    //adds newEl to the bottom of the list
    dvPrint.appendChild(newEl);
  }
}
