// EVEN LARGER, UNTIL NOT

let xPos = 300;
let yPos = 300;
let d = 1;

function setup(){
    createCanvas (600, 600);
}
    

function draw() {
    background (21, 59, 26);

    d = d + 1;
    if(d >= 200){
        d = 1;
    }
    circle(xPos, yPos, d);
}