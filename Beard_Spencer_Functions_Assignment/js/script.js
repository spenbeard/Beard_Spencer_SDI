 /*
Spencer Beard
SDI Section #1
Title
Date
 */

 //random number to create a variance on base damage.
 function damageVariance(min, max){
     var variance = Math.round(Math.random()*(max-min)+Number(min))/100;
     return variance;
 }

 //numbers to create variance for attack.
 var minVar = 75;
 var maxVar = 125;
 //numbers to create variance for special attack.
 var minSpeVar = 100;
 var maxSpeVar = 200;

 //Initial interaction prompting for name.
 var userName = prompt("Hello and welcome to the Arena. What is your name?");
 //validation for blank entries.
 while(userName === ""){
     userName = prompt("We will not admit anyone to fight in the Arena without a name. What is your name?");
 }
 //greet user as a courtesy.
 console.log("Hello, " + userName + ". Welcome to the Arena.");

 //array for weapon choices
 var weaponChoices = ["Sword", "Hammer", "Bow"];
 //damage = [sword damage, axe damage, bow damage]
 var weaponDamage = [8, 7, 4];
 //critical strike chance (in decimal format) [sword chance, hammer chance, bow chance]
 var weaponCritChance = [.05,.10,.20];
 //critical strike multiplier [sword multiplier, hammer multiplier, bow multiplier]
 var weaponCritHit = [2, 3, 5];

 //prompt user for weapon choice
 var userWeapon = prompt("What weapons do you desire to fight with?\n\nChoose from the following options:\n" + weaponChoices[0] + " - High base damage.\n" + weaponChoices[1] + " - High stun chance.\n" + weaponChoices[2] + " - High Critical strike chance.");
 var weaponValid = 0;

 //validate weapon choice
 for(var iW = 0; iW < 1; ){
     for (var i = 0; i < weaponChoices.length; i++){
         //if weapon is valid, display summary of stats for chosen weapon
         if(weaponChoices[i].toLowerCase() === userWeapon.toLowerCase()){
             console.log("You have chosen to wield a " + userWeapon + ".");
             var userWeaponDamage = weaponDamage[i];
             console.log("Your base damage is " + userWeaponDamage + ".");
             var userWeaponCritChance = weaponCritChance[i];
             console.log("Your base critical strike chance is " + userWeaponCritChance*100 + "%.");
             var userWeaponCritHit = weaponCritHit[i];
             console.log("Your base critical strike multiplier is " + userWeaponCritHit + ".");
             i = weaponChoices.length + 1;
             weaponValid++;
         }
     }
     //if weapon is not valid, reprompt user for valid weapon
     if(weaponValid == 0){
         console.log("I do not possess that weapon. Please listen carefully.");
         userWeapon = prompt("I do not possess that weapon. Please listen carefully./nWhat weapons do you desire to fight with?\n\nChoose from the following options:\n" + weaponChoices[0] + " - High base damage.\n" + weaponChoices[1] + " - High stun chance.\n" + weaponChoices[2] + " - High Critical strike chance.");
     } else{
         iW = 1;
     }
 }

 //choices for enemies. Humans will fight with swords. Dwarves will fight with hammers. Elves will fight with bows.
 var enemyRace = ["Human", "Dwarf", "Elf"];
 var enemyChoice = prompt("Finally, what enemy would you like to fight?\n\nChoose from the following options:\n" + enemyRace[0] + " - Prefers swords.\n" + enemyRace[1] + " - Prefers hammers.\n" + enemyRace[2] + " - Prefers bows.");
 var enemyValid = 0;

 //validate enemy choice
 for(var iE = 0; iE < 1; ){
     for (i = 0; i < enemyRace.length; i++) {
         //if the enemy choice is valid, display enemy stats
         if(enemyRace[i].toLowerCase() === enemyChoice.toLowerCase()){
             console.log("You have chosen to fight a(n) " + enemyChoice + ".");
             var enemyDamage = weaponDamage[i];
             console.log("You enemy's damage is " + enemyDamage);
             var enemyCritChance = weaponCritChance[i];
             console.log("Your enemy's critical strike chance is " + enemyCritChance*100 + "%.");
             var enemyCritHit = weaponCritHit[i];
             console.log("Your enemy's critical strike multiplier is " + enemyCritHit + ".");
             enemyValid++;
         }
     }
     //if enemy choice is invalid, give humorous condescension and reprompt
     if(enemyValid == 0){
         console.log("You cannot fight an imaginary enemy. Please listen carefully.");
         enemyChoice = prompt("You cannot fight an imaginary enemy. Please listen carefully.\nWhat enemy would you like to fight?\n\nChoose from the following options:\n" + enemyRace[0] + " - Prefers swords.\n" + enemyRace[1] + " - Prefers hammers.\n" + enemyRace[2] + " - Prefers bows.");
     } else{
         iE = 1;
     }
 }

 //anon function to calculate damage dealt in battle. In theory, there would be an "escape" option that would end the battle, thus attack may never be needed if the user always escapes.
 //variance allows for a slightly non-predictable battle. If your hit is anywhere between 75% and 125% of your base damage, it makes it less static
 var attack = function baseAttackDamage(baseDamage, critChance, critHit, variance){
     //creates random number for crit chance
     var critStrike = Math.round(Math.random()*100);
     var atkDamage;
     //compares the random number for critStrike against the parameter entered for crit chance. If crit is successful, then multiply base damage by critHit parameter and variance parameter, otherwise, just do baseDamage * variance
     if(critStrike <= critChance*100){
         atkDamage = Math.round(Number(baseDamage)*Number(critHit)*Number(variance));
         return atkDamage;
     } else {
         atkDamage = Math.round(Number(baseDamage)*Number(variance));
         return atkDamage;
     }
 };

 //random number generator for enemy actions. Since this one was not dealing with percents, it needed a different function than the one preivously created
 function enemyDecision(min, max){
     var choice = Math.floor(Math.random()*(max-min)+min);
     return choice;
 }

 //health for battle
 var userHP = 100;
 var enemyHP = 100;

 //action choices and validation variable for actions.
 var availableActions = ["Attack", "Special Attack"];
 var actionValid = 0;

//battle sequence. As long as both the user and the enemy have HP > 0, the battle will continue
 while(userHP > 0 && enemyHP > 0) {
     //prompt user for initial action
     var action = prompt("You have " + userHP + " remaining. Your enemy has " + enemyHP + " remaining. What would you like to do?\n\nPlease select from the following:\n" + availableActions[0] + "\n" + availableActions[1] + " - Warning: Special Attack deals extra damage, but hurts you as well.");
     //if action is left blank, tell the user that they have to do something.
     while(action === ""){
         action = prompt("You must do something.\nYou have " + userHP + " remaining. Your enemy has " + enemyHP + " remaining. What would you like to do?\n\nPlease select from the following:\n" + availableActions[0] + "\n" + availableActions[1] + " - Warning: Special Attack deals extra damage, but hurts you as well.");
     }
     //validation of action to determine what attack to use
     for (var iA = 0; iA < 1; ) {
         for (i = 0; i < availableActions.length; i++){
             if (availableActions[i].toLowerCase() === action.toLowerCase()) {
                 console.log("You chose " + action);
                 //if statement for choosing "Attack". Could not figure out how to test this without doing some hard coding, so the test is always against whatever is the first value of the availableActions.
                 if (action.toLowerCase() === availableActions[0].toLowerCase()) {
                     //calls upon the damageVariance function to determine variance for this iteration of attack.
                     var hitVar = damageVariance(minVar, maxVar);
                     //calls upon the attack function to determine what the total damage dealt to the enemy will be
                     var atkHit = attack(userWeaponDamage, userWeaponCritChance, userWeaponCritHit, hitVar);
                     //adjusts the enemyHP based on the damage.
                     enemyHP = enemyHP - atkHit;
                     //if statement to indicate whether the fight continues or is over.
                     if (enemyHP <= 0) {
                         console.log("You deal " + atkHit + " damage. Your enemy is vanquished! Congratulations!");
                     } else {
                         console.log("You deal " + atkHit + " damage.");
                         console.log("You have " + userHP + " remaining and your enemy has " + enemyHP + " remaining.");
                     }
                     actionValid++;
                 }
                 //if statement for choosing "Special Attack". Could not figure out how to test this without doing some hard coding, so the test is always against whatever is the first value of the availableActions.
                 if (action.toLowerCase() === availableActions[1].toLowerCase()) {
                     //calls upon the damageVariance function to determine variance for this iteration of Special Attack.
                     hitVar = damageVariance(minVar, maxVar);
                     //calls upon the attack function to determine what the total damage dealt to the enemy will be.
                     atkHit = attack(userWeaponDamage * 2, userWeaponCritChance, userWeaponCritHit, hitVar);
                     //calls upon the damageVariance function to determine variance for the damage dealt to the user for using Special Attack.
                     var specialVar = damageVariance(minSpeVar, maxSpeVar);
                     //damage dealt to self for using special attack
                     var selfDamage = Math.round(userWeaponDamage * specialVar);
                     //adjusts enemyHP based on the damage
                     enemyHP = enemyHP - atkHit;
                     //adjusts userHP based on the damage
                     userHP = userHP - selfDamage;
                     //if statment to indicate whether the fight continues or is over. Since Special Attack causes damage to both combatants, there is a possibility of both the user and enemy reaching 0 HP at the same time, thus a draw would occur.
                     if (enemyHP <= 0 && userHP <= 0) {
                         console.log("You deal " + atkHit + " damage and take " + selfDamage + " damage. You and your enemy are both down. The match is a draw.");
                     } else if (enemyHP <= 0 && userHP > 0){
                         console.log("You deal " + atkHit + " damage and take " + selfDamage + " damage. Your enemy is vanquished! Congratulations!");
                     } else {
                         console.log("You deal " + atkHit + " damage and take " + selfDamage + " damage.");
                         console.log("You have " + userHP + " remaining and your enemy has " + enemyHP + " remaining.");
                     }
                     actionValid++;
                 }
             }
         }
         //validation prompt if action entered is not valid
         if(actionValid == 0){
             action = prompt("You can not do that.\nYou have " + userHP + " remaining. Your enemy has " + enemyHP + " remaining. What would you like to do?\n\nPlease select from the following:\n" + availableActions[0] + "\n" + availableActions[1] + " - Warning: Special Attack deals extra damage, but hurts you as well.");
         } else {
             iA = 1;
         }
     }
     //if the enemy is still alive after the player's turn, then he gets an action.
     if(enemyHP > 0){
         //creates a random number to determine what the enemy does. In this specific setup, the enemy will use Attack 80% of the time and Special Attack 20% of the time.
         var enemyAction = enemyDecision(1, 100);
         for (i = 0; i < availableActions.length; i++){
             //if enemyAction chooses Attack
             if(enemyAction <= 80){
                 //calls upon the damageVariance function to determine variance for this iteration of Attack.
                 var enemyHitVar = damageVariance(minVar, maxVar);
                 //calls upon the attack function to determine what the total damage dealt to the enemy will be.
                 var enemyAtkHit = attack(enemyDamage, enemyCritChance, enemyCritHit, enemyHitVar);
                 //adjusts userHP based on the damage
                 userHP = userHP - enemyAtkHit;
                 //if statment to indicate whether the fight continues or is over.
                 if(userHP <= 0){
                     console.log("Your enemy attacked! You take " + enemyAtkHit + " damage. You have been defeated!");
                 } else {
                     console.log("Your enemy attacked! You take " + enemyAtkHit + " damage.");
                     console.log("You have " + userHP + " remaining and your enemy has " + enemyHP + " remaining.");
                 }
                 i = availableActions.length + 1;
             }
             //if enemyAction chooses Special Attack
             if(enemyAction > 80){
                 //calls upon the damageVariance function to determine variance for this iteration of Special Attack.
                 enemyHitVar = damageVariance(minVar, maxVar);
                 //calls upon the attack function to determine what the total damage dealt to the enemy will be.
                 enemyAtkHit = attack(enemyDamage*2, enemyCritChance, enemyCritHit, enemyHitVar);
                 //calls upon the damageVariance function to determine variance for the damage dealt to the enemy for using Special Attack.
                 var enemySpeVar = damageVariance(minSpeVar, maxSpeVar);
                 //damage dealt to self for using special attack
                 var enemySelfDamage = Math.round(userWeaponDamage * specialVar);
                 //adjusts userHP based on the damage
                 userHP = userHP - enemyAtkHit;
                 //adjusts enemyHP based on the damage
                 enemyHP = enemyHP - enemySelfDamage;
                 //if statment to indicate whether the fight continues or is over. Since Special Attack causes damage to both combatants, there is a possibility of both the user and enemy reaching 0 HP at the same time, thus a draw would occur.
                 if (enemyHP <= 0 && userHP <= 0) {
                     console.log("Your enemy deals " + enemyAtkHit + " damage and takes " + enemySelfDamage + " damage. You and your enemy are both down. The match is a draw.");
                 } else if (enemyHP > 0 && userHP <= 0){
                     console.log("Your enemy deals " + enemyAtkHit + " damage and takes " + enemySelfDamage + " damage. You have been defeated!");
                 } else {
                     console.log("Your enemy deals " + enemyAtkHit + " damage and takes " + enemySelfDamage + " damage.");
                     console.log("You have " + userHP + " remaining and your enemy has " + enemyHP + " remaining.");
                 }
                 i = availableActions.length + 1;
             }
         }
         //resets the validation loop for the user action. Without this, the user would make one action, then the enemy would do actions over and over until the player was defeated.
         actionValid = 0;
     }
 }

 /*
 Tested Outputs:
  Hello, Conan the Barbarian. Welcome to the Arena.
  You have chosen to wield a Sword.
  Your base damage is 8.
  Your base critical strike chance is 5%.
  Your base critical strike multiplier is 2.
  You have chosen to fight a(n) Human.
  You enemy's damage is 8
  Your enemy's critical strike chance is 5%.
  Your enemy's critical strike multiplier is 2.
  You chose Special Attack
  You deal 38 damage and take 11 damage.
  You have 89 remaining and your enemy has 62 remaining.
  Your enemy attacked! You take 9 damage.
  You have 80 remaining and your enemy has 62 remaining.
  You chose Special Attack
  You deal 26 damage and take 11 damage.
  You have 69 remaining and your enemy has 36 remaining.
  Your enemy attacked! You take 7 damage.
  You have 62 remaining and your enemy has 36 remaining.
  You chose Special Attack
  You deal 23 damage and take 13 damage.
  You have 49 remaining and your enemy has 13 remaining.
  Your enemy attacked! You take 8 damage.
  You have 41 remaining and your enemy has 13 remaining.
  You chose Special Attack
  You deal 22 damage and take 10 damage. Your enemy is vanquished! Congratulations!
        I didn't like this set of numbers, so I lowered the extra damage dealt by special attack

  Hello, Muradin Bronzebeard. Welcome to the Arena.
  You have chosen to wield a Hammer.
  Your base damage is 7.
  Your base critical strike chance is 10%.
  Your base critical strike multiplier is 3.
  You have chosen to fight a(n) Dwarf.
  You enemy's damage is 7
  Your enemy's critical strike chance is 10%.
  Your enemy's critical strike multiplier is 3.
  You chose Special Attack
  You deal 11 damage and take 11 damage.
  You have 89 remaining and your enemy has 89 remaining.
  Your enemy attacked! You take 8 damage.
  You have 81 remaining and your enemy has 89 remaining.
  You chose Attack
  You deal 8 damage.
  You have 81 remaining and your enemy has 81 remaining.
  Your enemy attacked! You take 26 damage.
  You have 55 remaining and your enemy has 81 remaining.
  You chose Special Attack
  You deal 14 damage and take 11 damage.
  You have 44 remaining and your enemy has 67 remaining.
  Your enemy attacked! You take 8 damage.
  You have 36 remaining and your enemy has 67 remaining.
  You chose Special Attack
  You deal 17 damage and take 10 damage.
  You have 26 remaining and your enemy has 50 remaining.
  Your enemy attacked! You take 5 damage.
  You have 21 remaining and your enemy has 50 remaining.
  You chose Special Attack
  You deal 16 damage and take 8 damage.
  You have 13 remaining and your enemy has 34 remaining.
  Your enemy attacked! You take 6 damage.
  You have 7 remaining and your enemy has 34 remaining.
  You chose Attack
  You deal 7 damage.
  You have 7 remaining and your enemy has 27 remaining.
  Your enemy deals 14 damage and takes 8 damage. You have been defeated!

  */