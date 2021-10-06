//this is where the paddle starts
let yPaddle = 175;
let paddleHeight = 50;

//this is where the ball starts
// let circle = { xCirc: 200 , yCirc: 200, radius: 10}
let xCirc = 200;
let yCirc = 200;

let score = 0;

let ballSpeedx = 5;
let ballSpeedy = 1;
function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(0,0,0);
    //this is the color of the paddle
    fill(225,225,225);

    fill(225,225,225);
    textSize(24);
    text("Score: " + score, 10, 25);

    //this is the shape and location of the paddle.
    //y variable changes
    rect(380, yPaddle, 10, paddleHeight);
    //this moves paddle up
    if(keyIsDown(UP_ARROW)){
        yPaddle -= 5;
    }
    //this moves paddle down
    if(keyIsDown(DOWN_ARROW)){
        yPaddle += 5;
    }

    //this is the ball
    fill(186, 56, 20);
    circle(xCirc, yCirc, 10)
    //ball position. Changes with speed
    xCirc = xCirc - ballSpeedx;
    yCirc = yCirc + ballSpeedy;
    // console.log(xCirc)
    
    //when ball gets to RIGHT of screen ball resets in center
    if(xCirc >= 500){
        xCirc = 200;
        yCirc = 200;
        //when reset ball goes to the left
        ballSpeedx = 5;

        //score resets
        score = 0;
    }
    //when ball gets to LEFT bounce
    if(xCirc <= 0){
        ballSpeedx = ballSpeedx * -1 ;
   }

   //when ball gets to BOTTOM bounce
   if(yCirc >= 400){
    ballSpeedy = ballSpeedy * -1 ;
   }
   //when ball gets to TOP bounce
   //if ball x position is 380 AND yCircle is to the range of yPaddle
   if(yCirc <= (yPaddle + 50) && yCirc >= (yPaddle - 50) && xCirc == 380){
       console.log(yCirc)
       console.log("paddle " +yPaddle)
       //makes ball bounce back
        ballSpeedx = ballSpeedx * -1 ;
        ballSpeedy = ballSpeedy * -1;

        //add one point to score
        score++;
  }
}

