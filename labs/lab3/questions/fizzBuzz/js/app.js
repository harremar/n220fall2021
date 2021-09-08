
let i = 1;
let xPos = 0;


function setup(){

    //this is the canvas size
    createCanvas(1050, 300);

    //this is the color of the background
    background(100, 100, 100);

    //i is the number of squares that would be printed out. It would stop until i reachs 26
    for (var i = 1 ; i < 26 ; i++) {
        //xPos goes up by 40 in each loop. Moves blocks from left to right.
        xPos = xPos + 40;

        //color of the cirlce. BLACK
        fill(0, 0, 0);
        circle(xPos, 100, 20);
        console.log(i);

        //puple circles
        //only turns purple if i is divisable by 3
        if(i % 3 == 0){
            fill(147, 78, 217);
            circle(xPos, 100, 20);

        }

        //green circles
        //only turns green if i is divisable by 5
        if (i % 5 == 0)  {
            fill(58, 189, 113);
            circle(xPos, 100, 20);

        }

        //blue circles
        //only turns blue if i is divisable by 3 AND 5
        if ((i%3 == 0) && (i%5==0)){
            fill(52, 143, 217);
            circle(xPos, 100, 20);

        }
    }

}
