function setup() {
    var sand = "#FFEFE0";
    var r = 18;

    createCanvas(800, 800);

    //RGB
    //SAND #FFEFE0
    //LIGHTBLUE #A4DAD5
    //TEEL #5EC7C8
    //GREEN #3FB8A4
    //DARKGREEN #029283
    background(sand); 

    noStroke();
    
    //body
    fill("#A4DAD5"); //lightblue
    circle(400, 240, 70);

    ellipse(270, 280, 140, 90);
    ellipse(530, 280, 140, 90);
    ellipse(270, 500, 140, 90);
    ellipse(530, 500, 140, 90);
    triangle(340, 520, 398, 575, 456, 520);

    //eyes
    fill("#5EC7C8");
    circle(380, 220, r);
    circle(420, 220, r);
    rect(395, 180, 15, 3);

    //pupil
    fill("#ffffff");
    circle(384, 210, 8);
    circle(424, 210, 8);


    //tutleshell
    stroke("#3FB8A4");
    strokeWeight(10);
    fill("#029283"); //darkgreen
    circle(400, 400, 150);


    noStroke();
    //seashells
    fill("#C7D6FF");
    quad(120, 130, 180, 130, 165, 175, 135, 175);
    ellipse(150, 175, 45, 10);
    ellipse(150, 130, 60, 18);

    quad(620, 330, 680, 330, 665, 375, 635, 375);
    ellipse(650, 375, 45, 10);
    ellipse(650, 330, 60, r);

    quad(320, 630, 380, 630, 365, 675, 335, 675);
    ellipse(350, 675, 45, 10);
    ellipse(350, 630, 60, r);

}