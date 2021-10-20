let txtString = document.getElementById("txtString")
let dvMessage = document.getElementById("dvMessage")

function calculate(){
    //get the user input  
    let cost = Number(txtString.value); //Number makes line 10 work :)yay
    //get tip value. Tip is set to 10%
    let tip =  Number((cost * 0.1).toFixed(2)); //Rounds to 100th place
    //get total value. Add cost and tip
    let total = Number((cost + tip).toFixed(2));

    //tells user tip amount and total amount
    let message = "Tip: $" + tip + "  Total: $" + total;
    
    //message would display to the page
    dvMessage.innerHTML = message;
    //message would display to the console
    console.log(message)
}