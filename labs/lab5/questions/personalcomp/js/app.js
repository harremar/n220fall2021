
//This is to style the green square
let dvShape = document.getElementById("shape");

//this is the starting color
dvShape.style.backgroundColor = "#9beb98";

//this is the name of the div
dvShape.innerHTML = "GreenSquare";

//this is the shape of the div
dvShape.style.width = "200px";
dvShape.style.height = "200px";

//This is when the div is clicked
function shapeClick(){

    //green square -> pink circle
    if(dvShape.innerHTML == "GreenSquare"){
        //changes shape of div to circle
        dvShape.style.borderRadius = circle();
        //new color
        dvShape.style.backgroundColor = "#e1aff0"
        //div name changes to pinkcircle
        dvShape.innerHTML = "PinkCircle";
    }
    //pink circle -> orange square
    else if(dvShape.innerHTML == "PinkCircle"){
        //changes shape of div to square
        dvShape.style.borderRadius = square();
        //new color
        dvShape.style.backgroundColor = "#ebac59"
        //div name changes to orangesquare
        dvShape.innerHTML = "OrangeSquare";
    }
    //orange square -> yellow circle
    else if(dvShape.innerHTML == "OrangeSquare"){
        //changes shape of div to circle
        dvShape.style.borderRadius = circle();
        //new color
        dvShape.style.backgroundColor = "#fffc99"
        //div name changes to yellowcircle
        dvShape.innerHTML = "YellowCircle";
    }

    //yellow circle -> green square
    else {
        //changes shape of div to square
        dvShape.style.borderRadius = square();
        //new color
        dvShape.style.backgroundColor = "#9beb98"
        //div name changes to greensquare
        dvShape.innerHTML = "GreenSquare";
    }
    
}

//function that turns shape into circle
function circle() {
    let border = "200px";
    return border;
}

//function that turns shape into square
function square() {
    let border = "0";
    return border;
}