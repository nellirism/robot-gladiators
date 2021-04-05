// Game States
// "WIN" - Player robot as defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// console.log("Player Logistics: " + playerName, playerHealth, playerAttack);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// console.log(enemyNames);
// console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;

//for (var i=0; i < enemyNames.length; i++) {
//    console.log(enemyNames[i]);
//    console.log(i);
//    console.log(enemyNames[i] + " is at " + i + " index");
//}
// console.log("Enemy Logistics: " + enemyName, enemyHealth, enemyAttack);

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while (enemyHealth > 0) {
        // Prompt to ask player if they want to fight or skip battle.
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight)

        // if player chose to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
                // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable. 
                enemyHealth = enemyHealth - playerAttack;

                // Log a resulting message to the console so we know that it worked. 
                console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

                //check enemy's health
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                }
                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }

                // Subtract the value of 'enemyAttack' form the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable. 
                playerHealth = playerHealth - enemyAttack;

                // Log a resulting message to the console so we know that it worked. 
                console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

                //check Player's health
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                }
                else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }
            // if player chose to skip
            } else if (promptFight === "skip" || promptFight === "SKIP") {
                // confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");

                //if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerName + " has decided to skip the fight. Goodbye!");
                    // subtract money from playerMoney for skipping
                    playerMoney = playerMoney - 2;
                    console.log(playerMoney);
                }
                // if no (false), ask question again by running fight() again
                else {
                    fight();
                }
            } else {
                window.alert("You need to choose a valide option. Try again!");
        } 
    }    
};  

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
