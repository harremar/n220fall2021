//get elements from HTML
let txtString = document.getElementById("txtString");
let dvSum = document.getElementById("dvSum");
let dvAverage = document.getElementById("dvAverage");

//function that calulates the average
function calcAverage() {
  //gets the users input
  let numbers = txtString.value;
  //turns each number into an element in an array
  let splitNumbers = numbers.split(",");
  console.log(splitNumbers);

  //sum starts at 0. gets the total
  let sum = 0;
  //count starts at 0. gets how many times it goes through the loop
  let count = 0;

  //loop that finds the sum
  for (let i = 0; i < splitNumbers.length; i++) {
    //new sum equals old sum + number
    sum = sum + Number(splitNumbers[i]);
    console.log(splitNumbers[i]);
    //count goes up by one
    count = count + 1;
  }
  //finding the average
  average = sum / count;

  //printing out the sum in HTML and console
  console.log("The Sum is " + sum);
  dvSum.innerHTML = "The Sum is " + sum;

  //printing out the average in HTML and console
  console.log("The Average is " + average);
  dvAverage.innerHTML = "The Average is " + average;

  //txtString resets. Old user input is gone.
  txtString.value = " ";
}
