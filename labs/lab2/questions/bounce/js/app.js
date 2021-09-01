//BALL BOUNCE
let xPos = 0;
let yPos = 300;
let xSpeed = 5;
let ySpeed = 5;


function setup(){
    createCanvas(800, 600);
 }

 function draw(){
     background(255, 250, 186);

     xPos = xPos + xSpeed;
     yPos = yPos + ySpeed;
     console.log(xPos);
     console.log(yPos);


     fill(0, 0, 0);
     circle(xPos, yPos, 20);

     if(xPos >= 800){
         xSpeed = xSpeed * -1 ;
     }
     if(xPos <= 0){
        xSpeed = xSpeed * -1 ;
    }
    if(yPos >= 600){
        ySpeed = ySpeed * -1 ;

    }
    if(yPos <= 0){
        ySpeed = ySpeed * -1 ;

   }
 }