let xPos = [0,0,0];
let yPos = [0,0,0];
let xSpeed = 5;
let ySpeed = 5;
// let rect = [0, 0, 0];


function setup(){
    //this is the size of the canvas and its background color.
    createCanvas(580, 400);
    // strokeWeight(30);
}

function draw(){
    background (204);
    // stroke(102);


    // line(40,0, 70, height);
    for(var i = 0; i < 5; i++) {
        if(mouseIsPressed == true){
            fill (0, 0, 0)
            // rect (mouseX, mouseY, 40, 20);
            xPos[i] = mouseX;
            yPos[i] = mouseY;

            // console.log(xPos[0]);
            console.log(yPos[0]);
        }
        rect(xPos[i], yPos[i], 40, 20);
        

        if(yPos[i] < 380){

            yPos[i] = yPos[i] + ySpeed;
            console.log(yPos[i]);
        }
        if(yPos[i] == 380){
            ySpeed = 0;
        }
        // rect(xPos[i], yPos[i], 40, 20);
    }
    
}