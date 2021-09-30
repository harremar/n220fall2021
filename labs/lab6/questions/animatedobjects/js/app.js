
//This object holds arrays that define a circle.
//x = xPosition   y = yPosition   size = size of circle
let circles = [ 
    {x: 100, y: 100, size: 20},
    {x: 200, y: 200, size: 16},
    {x: 300, y: 100, size: 10},
    {x: 20, y: 50, size: 32},
    {x: 430, y: 143, size: 24},
    {x: 0, y: 0, size: 5}
]

//This is the speed at which the ball is moving for x and y position
let xSpeed = 1;
let ySpeed = 1;


//creating the canvas
function setup(){
    createCanvas(600, 600);
}

//creating the circles on page
function draw(){
    //background resets after every frame.
    background(82, 84, 209);

    //loop to create all the circles in the object
    for(var i = 0; i < circles.length; i++){
    //color of circles
    fill(25, 11, 71);
    //size and position of the circles
    circle(circles[i].x, circles[i].y, circles[i].size);
    //x position increases by one for each frame
    circles[i].x = circles[i].x + xSpeed;

    //y position increases by one for each frame
    circles[i].y = circles[i].y + ySpeed;
    }
}