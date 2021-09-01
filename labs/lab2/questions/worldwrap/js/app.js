// WORLD WRAP

let xPos = 0;
let yPos = 300;


function setup(){
    createCanvas(800, 600);
 }

 function draw(){
     background(0, 0, 0);

     xPos = xPos + 5;
     console.log(xPos);
     fill(255, 255, 255);
     circle(xPos, yPos, 20);
     if(xPos >= 800){
         xPos = 0;
     }
 }