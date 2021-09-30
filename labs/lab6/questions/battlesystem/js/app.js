
//this is the object that scores name, happiness level, energy level, and age
let player = {
    playerHP: 500,
    playerAttack: 60,
    playerDefense: 10
}
let enemy = {
    enemyHP: 460,
    enemyAttack: 53,
    enemyDefense: 10
}

//this get the element in the HTML--
let playerHP = document.getElementById("playerHP");
//this gets the pet name in the object
playerHP.innerHTML = "HP: " + player.playerHP;

//this get the element in the HTML--
let playerAttack = document.getElementById("playerAttack");
//this gets the pet name in the object
playerAttack.innerHTML = "Attack: " + player.playerAttack;

//this get the element in the HTML--
let playerDefense = document.getElementById("playerDefense");
//this gets the pet name in the object
playerDefense.innerHTML = "Defense: " + player.playerDefense;


//this get the element in the HTML--
let enemyHP = document.getElementById("enemyHP");
//this gets the pet name in the object
enemyHP.innerHTML = "HP: " + enemy.enemyHP;

//this get the element in the HTML--
let enemyAttack = document.getElementById("enemyAttack");
//this gets the pet name in the object
enemyAttack.innerHTML = "Attack: " + enemy.enemyAttack;

//this get the element in the HTML--
let enemyDefense = document.getElementById("enemyDefense");
//this gets the pet name in the object
enemyDefense.innerHTML = "Defense: " + enemy.enemyDefense;

let win = document.getElementById("win");
win.innerHTML = "";


//When the Play button is clicked this would happen
function attackClick(){
    enemy.enemyHP = enemy.enemyHP - (player.playerAttack - enemy.enemyDefense)
    console.log(enemy.enemyHP)
    enemyHP.innerHTML = "HP: " + enemy.enemyHP;

    player.playerHP = player.playerHP - (enemy.enemyAttack - player.playerDefense)
    playerHP.innerHTML = "HP: " + player.playerHP;
    if(enemy.enemyHP < 0){
        console.log("You win")
        win.innerHTML = "Player has won!! :D";
    }
    else if (player.playerHP < 0){
        console.log("You lost :(")
        
    }
}






