let xPos = [];
let yPos = [];
//YPOS AND XPOS ARRAYS ARE EMPTY CAUSE INFINITE AMOUNT OF BLOCKS
//YSPEED IS THE SPEED AT WHICH THE BLOCK IS FALLING
let ySpeed = 5;

function setup () {
    createCanvas(600, 400);
}

function draw() {
    background(0,0,0);

    //FOR LOOP RUNS FOREVER. WOULD PRINT A NEW CIRCLE FOR EACH CLICK.
    for(var i = 0; i < yPos.length; i++){
        rect(xPos[i], yPos[i], 40, 20);
        // yPos[i] = yPos[i] + ySpeed;

        //IF YPOS IS LESS THAN 380 THE BLOCK WOULD MOVE DOWN BY 5 PIXELS PER FRAME.
        if(yPos[i] < 380){

            yPos[i] = yPos[i] + ySpeed;
            // console.log(yPos[i]);
        }

        //HAD TO MAKE IT 386 SO CODE WOULDNT BREAK.NOTICE CODE BREAKS DEPENDING ON WHERE BLOCK WAS CLICKED. SINCE YSPEED GOES UP BY 5 BLOCK MAY BE 382 WHICH WOULD BREAK THE CODE.
        //ONCE IT REACHES 386 YSPEE TURNS TO 0. CAN SEE BLOCK HIT THE BOTTOM
        if(yPos[i] == 386){
            ySpeed = 0;
        }
    }

}

//IF MOUSE IS PRESSED XPOS AND YPOS MOVES TO THE NEXT STOP IN THE ARRAY OR ADDS A NEW LOCATION.
function mousePressed() {
    xPos.push(mouseX);
    yPos.push(mouseY);
}