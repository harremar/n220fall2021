
//this is the object that stores the player's HP, attack, and defense
let player = {
    playerHP: 500,
    playerAttack: 60,
    playerDefense: 10
}

//this is the object that stores the enemyy's HP, attack, and defense
let enemy = {
    enemyHP: 460,
    enemyAttack: 53,
    enemyDefense: 10
}

//this get the element in the HTML--playerHP
let playerHP = document.getElementById("playerHP");
//this gets the player's HP in the object
playerHP.innerHTML = "HP: " + player.playerHP;

//this get the element in the HTML--playerAttack
let playerAttack = document.getElementById("playerAttack");
//this gets the player's attack in the object
playerAttack.innerHTML = "Attack: " + player.playerAttack;

//this get the element in the HTML--playerDefense
let playerDefense = document.getElementById("playerDefense");
//this gets the player's denfense in the object
playerDefense.innerHTML = "Defense: " + player.playerDefense;


//this get the element in the HTML--enemyHP
let enemyHP = document.getElementById("enemyHP");
//this gets the enemy's HP in the object
enemyHP.innerHTML = "HP: " + enemy.enemyHP;

//this get the element in the HTML--enempyAttack
let enemyAttack = document.getElementById("enemyAttack");
//this gets the enemy's attack in the object
enemyAttack.innerHTML = "Attack: " + enemy.enemyAttack;

//this get the element in the HTML--enemyDefense
let enemyDefense = document.getElementById("enemyDefense");
//this gets the enemy's defense in the object
enemyDefense.innerHTML = "Defense: " + enemy.enemyDefense;

let win = document.getElementById("win");
win.innerHTML = "";


//When the attack button is clicked this would happen
function attackClick(){
    //new enemy HP = old enemy HP - (player's attack - enemy defense)
    enemy.enemyHP = enemy.enemyHP - (player.playerAttack - enemy.enemyDefense)
    console.log(enemy.enemyHP)
    //prints out new enemy HP on the page
    enemyHP.innerHTML = "HP: " + enemy.enemyHP;

    //new player HP = old player HP - (enemy's attack - player defense)
    player.playerHP = player.playerHP - (enemy.enemyAttack - player.playerDefense)
    //prints out new player HP on the page
    playerHP.innerHTML = "HP: " + player.playerHP;

    //What it would print out at the end to tell who won
    if(enemy.enemyHP < 0){
        console.log("You win")
        win.innerHTML = "Player has won!! :D";
    }
    else if (player.playerHP < 0){
        console.log("You lost :(")
        
    }
}






