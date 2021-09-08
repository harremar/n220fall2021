
function setup(){

    //this is the canvas size
    createCanvas(500, 500);
    
    //rows is rows in pyramid. There are 4 rows.
    //r is used to show what row the loop is on. The loop starts at 1 and stops when it reachs the nmber of rows. In this case 4.
    //c is column. For each column it would keep on printing squares til c variable is equal to r variable.
    var rows = 4;
    for(var r = 1; r <= rows; r++){
        for(var c = 1; c <= r; c++){
            //fill is the color of the square. Fill color is red
            fill(235, 64, 52);
            //c*52 and r*52 move the squares into their correct position
            rect (c*52, r*52 , 50, 50);

            //console prints out rows and columns. Used to see if squares would print out correctly
            console.log("row " + r);
            console.log("col " + c);
        }
    }



}