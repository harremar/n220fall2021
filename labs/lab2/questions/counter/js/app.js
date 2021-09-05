//COUNTER 
let xPos = 0;
let yPos = 150;


function setup(){

    createCanvas(400, 300);
}

function draw(){
    background(82, 84, 209);

    xPos = xPos + 1;
    console.log("counter: " + xPos);
    // String("counter:" + xPos);

    fill(25, 11, 71);
    circle(xPos, yPos, 10);
}