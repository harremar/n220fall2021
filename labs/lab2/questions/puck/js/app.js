

function setup(){
    createCanvas(400, 300);
}

function draw(){
    background(69, 92, 130);

    if(mouseX > 200){
        fill(179, 73, 101)
    }
    if(mouseX < 200){
        fill(29, 35, 194)
    }
    circle(mouseX, mouseY, 20);
}