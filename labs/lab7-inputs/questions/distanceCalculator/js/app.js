let x1 = document.getElementById("x1")
let x2 = document.getElementById("x2")
let y1 = document.getElementById("y1")
let y2 = document.getElementById("y2")

let dvMessage = document.getElementById("dvMessage")

function calDistance(){
    //get the user input
    let xOne = Number(x1.value);
    let xTwo = Number(x2.value);
    let yOne = Number(y1.value);
    let yTwo = Number(y2.value);

    //get xDiff
    //if statements check for what x value is greater. Avoid getting an negative number
    if(xOne > xTwo){ //if x1 is greater than x2 do this equation
        xDiff = xOne - xTwo
        //shows in console x difference
        console.log("xDiff is: " + xDiff)
    }
    else if(xOne < xTwo){ // if x2 is greater than x1 do this equation
        xDiff = xTwo - xOne
        //shows in console x difference
        console.log("xDiff is: " + xDiff)
    }

    //get yDiff
    //if statements check for what x value is greater. Avoid getting an negative number
    if(yOne > yTwo){ //if y1 is greater than y2 do this equation
        yDiff = yOne - yTwo
        //shows in console y difference
        console.log("yDiff is: " + yDiff)
    }
    else if(yOne < yTwo){ //if y2 is greater than y1 do this equation
        yDiff = yTwo - yOne
        //shows in console y difference
        console.log("yDiff is: " + yDiff)
    }

    //equation
    d = Math.sqrt( xDiff*xDiff + yDiff*yDiff); 
        //shows in console distance
        console.log("Distance: " + d)

    //show output on the screen
    dvMessage.innerHTML = "Distance: " + d;
}