//yPos == where balls are located on the y-axis
let yPos = [0,-50,-100, -150, -200, -250, -300, -350, -400, -450];

//xPos == where balls are located on the x-axis
let xPos = [45, 90, 135, 170, 215, 260, 305, 350, 395, 440];

//ySpeed == the speed at which the balls are falling
let ySpeed = 5;


function setup(){
    createCanvas(500, 500);
}

function draw(){
    background(50);

        //for loop == loops until 10 balls are on the screen
        for(var i = 0; i < yPos.length; i++) {
            //This is for each frame balls move down 5 pixels
            yPos[i] = yPos[i] + ySpeed;
            fill(10, 88, 100);
            circle(xPos[i], yPos[i], 10);

            //once all balls reach 500 balls are reseted back to 0
            if(yPos[i] > 500){
                yPos[i] = 0;
            }
            
        }

        // console.log("this is 0 " +yPos[0]);
        // console.log("this is 1 " +yPos[1]);
        // console.log("this is 2 " +yPos[2]);

    


    // // positions[i] = positions[i] + yPos;
    // fill(10, 88, 100);
    // // circle(250, yPos, 10);

    // positions.push(yPos);
    // positions.shift();

    // for(var i = 0; i < positions.length; i++) {
    //     circle(250, positions[0], 20);
    //     positions[0] = positions[0] + yPos;
    //     if(positions[i] != 50){
    //         positions[i] = positions[i] + yPos;
    //     }
    //     console.log("this is position " + positions[0]);
    //     console.log("this is position 1 " + positions[1]);

    // }

    
}

