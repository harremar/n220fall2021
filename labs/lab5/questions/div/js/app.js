
//for loop would print out 100 squares
for (var i = 0; i < 100; i++) {
    //This would get the div that has an id named square
    let square = document.getElementById("square");

    //This would create a new div
    let box = document.createElement('div');
    
    //float left would make the boxes be side by side instead of top of one another.
    box.style.float = "left";

    //gives the squares a height and a width of 20px
    box.style.height = "20px";
    box.style.width = "20px";

    //margin to help separate the squares
    box.style.margin = "2px";

    //this gives each square a different background color.
    //Had to create new function that would do this.
    box.style.backgroundColor = randomColor();
    
    //appendChild adds another div
    square.appendChild(box); 
}


function randomColor() {
    //this is the r value
    var r = Math.round( Math.random() * 255);

    //this is the g value
    var g = Math.round( Math.random() * 255);

    //this is the b value
    var b = Math.round( Math.random() * 255);

    //collects all values and strong puts them all together to create a random color.
    var colorString = "rgb(" + r + "," + g + "," + b + ")";
    //return function stops the execution. Returns the given value to the function caller. In this case randomColor()
    return colorString;
}

