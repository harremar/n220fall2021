let x = 0;
let r = 5;

function setup () {
    //this is the canvas size
    createCanvas(800, 800);

    //r is the radius of the circle
    //r starts at 0 and stops when r = 50. Would go through the loop 50 times.
    for(var r = 0; r < 50; r++) {
        //circle no fill
        noFill();
        //circle is position in the middle.
        //r*5 makes circle bigger
        circle(400, 400, r*5);
    }
}