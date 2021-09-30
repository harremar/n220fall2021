
//this is the object that scores name, happiness level, energy level, and age
let pet = {
    name: "Bobby",
    happiness: 50,
    energy: 50,
    age: 2
}

//this get the element in the HTML--ID name
let dvName = document.getElementById("name");
//this gets the pet name in the object
dvName.innerHTML = "Name: " + pet.name;

//this get the element in the HTML--ID happy
let dvHappy = document.getElementById("happy");
//this get the pet happiness level
dvHappy.innerHTML = "Happiness: " + pet.happiness;

//this get the element in the HTML--ID energy
let dvEnergy = document.getElementById("energy");
//this get the pet energy level
dvEnergy.innerHTML = "Energy: " + pet.energy;

//this get the element in the HTML--ID age
let dvAge = document.getElementById("age");
//this get the pet age
dvAge.innerHTML = "Age: " + pet.age;


//This is the button style for Playing with Pet
let dvHappybtn = document.getElementById("happybtn");
// dvHappybtn.style.backgroundColor = "#967bd1";
// dvHappybtn.style.width = "100px";
// dvHappybtn.style.height = "50px";
// dvHappybtn.style.margin = "20px";
// dvHappybtn.style.borderRadius = "20px";
// dvHappybtn.style.textAlign = "center";

//This is the button style for Feeding the Pet
let dvEnergybtn = document.getElementById("energybtn");
// dvEnergybtn.style.backgroundColor = "#967bd1";
// dvEnergybtn.style.width = "100px";
// dvEnergybtn.style.height = "50px";
// dvEnergybtn.style.margin = "20px";
// dvEnergybtn.style.borderRadius = "20px";
// dvEnergybtn.style.textAlign = "center";


//When the Play button is clicked this would happen
function playClick(){
    //pet happiness level goes up by 5
    pet.happiness = pet.happiness + 5;
    // console.log(pet.happiness)
    // console.log("pet happiness: " + pet.happiness)

    //This would display the new happiness level on the page
    dvHappy.innerHTML = "Happiness: " + pet.happiness;

}


//When the Feed button is clicked this would happen
function feedClick(){
    //pet energy level goes up by 5
    pet.energy = pet.energy + 5;

    // console.log("pet energy: " + pet.energy)

    //This would display the new energy level on the page
    dvEnergy.innerHTML = "Energy: " + pet.energy;


}




