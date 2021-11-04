let dvMessage = document.getElementById("dvMessage");
let myArray = ["Home", "About", "Art"];

function generate(number) {
  let message = outCome(myArray[number], number);
  dvMessage.innerHTML = message;
}

function outCome(name, num) {
  console.log(name + ": Index " + num);
  let mess = name + ": Index " + num;
  return mess;
}
