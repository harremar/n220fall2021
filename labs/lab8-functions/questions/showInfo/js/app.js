let dvMessage = document.getElementById("dvMessage");
let myArray = ["Home", "About", "Art"];

function generate() {
  let message = outCome(myArray[0], 0);
  dvMessage.innerHTML = message;
}
function generate2() {
  let message = outCome(myArray[1], 1);
  dvMessage.innerHTML = message;
}
function generate3() {
  let message = outCome(myArray[2], 2);
  dvMessage.innerHTML = message;
}
function outCome(name, num) {
  console.log(name + ": Index " + num);
  let mess = name + ": Index " + num;
  return mess;
}
// function generate2() {
//   let message = myArray[1];
//   dvMessage.innerHTML = message + " 1";
// }
// function generate3() {
//   let message = myArray[2];
//   dvMessage.innerHTML = message + " 2";
// }

// function button() {
//   let myArray = ["Home", "About", "Art"];

//   let index = Math.floor(Math.random() * myArray.length);

//   let outCome = myArray[index];

//   for (i = 0; i <= myArray.length - 1; i++) {
//     console.log(myArray[i]);
//     console.log(i);
//     if (myArray[i] == "Home") {
//       console.log("Home button was clicked");
//     }
//   }
//   console.log("button was clicked");

//   return outCome;
// }
