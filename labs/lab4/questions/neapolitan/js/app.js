
//these is the array variable. Holds all colors
let colors = ["#FA94C4" , "#FA94B5" , "#FFDDBD" , "#8C6551" , "#725349"]


function setup(){
    //this is the size of the canvas and its background color.
    createCanvas(580, 400);
    background (0, 0, 0);

    //for loop
    //starts at 0 because array placeholder starts at 0. 
    //color.length variable will stop once it is greater than colors array.
    //p++ makes p go up by one every time it goes through the loop
    for(var p = 0; p < colors.length; p++ ){
        //colors[p] will display color of rect. Ex: color[3] = #8C6551
        fill (colors[p]);
        //100*p spreads rectangles out on x-axis so squares can be horizontal
        rect (40+ 100*p, 150, 100, 100);
    }
}