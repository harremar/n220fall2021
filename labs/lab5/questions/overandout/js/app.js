
// this is to style/ animate the square
let dvSquare = document.getElementById("square");

//color of square
dvSquare.style.backgroundColor = "#32a6a8";

//width and height of the square
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";

//onmouseout this function is used. Makes square blue
function blueSquare(){
    dvSquare.style.backgroundColor = "#32a6a8";
}

//onmouseover this function is used. Makes square black
function blackSquare(){
    dvSquare.style.backgroundColor = "#000";
}