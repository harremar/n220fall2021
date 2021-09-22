//Need to make variables to store size of square
//w is width
//h is height
let w = 100;
let h = 100;

//This is to style the green square
let dvSquare = document.getElementById("square");

//color of square
dvSquare.style.backgroundColor = "#9beb98";

//plugging in variables and adding px. Width and height will start at 100.
dvSquare.style.width = w + "px";
dvSquare.style.height = h +"px";

//This is when the square is clicked
function squareClick(){
    
    //each time square is clicked w and h value will go up by 10%.
    w = w * 1.1;
    h = h * 1.1;

    //This is to get the new square on the screen
    dvSquare.style.width = w + "px";
    dvSquare.style.height = h +"px";
}