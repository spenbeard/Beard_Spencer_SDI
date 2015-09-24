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

 //numbers to create variance for damage. Damage variance from minVar(75%) to maxVar(125%) of the hit calculated by baseAttackDamageFunction
 minVar = 75;
 maxVar = 125;

 //Initial combat choice
 var userName = prompt("Hello and welcome to the Arena. What is your name?");
 while(userName === ""){
     userName = prompt("We will not admit anyone to fight in the Arena without a name. What is your name?");
 }
 //greet user as a courtesy.
 console.log("Hello, " + userName + ". Welcome to the Arena.");

 //create array for weapon
 var weaponChoices = ["Sword", "Hammer", "Bow"];
 //damage = [sword damage, axe damage, bow damage
 var weaponDamage = [8, 7, 5];
 //critical strike chance
 var weaponCritChance = [.05,.10,.17];
 //critical strike multiplier
 var weaponCritHit = [2, 3, 5];

 //prompt user for weapon choice
 var userWeapon = prompt("What weapons do you desire to fight with?\n\nChoose from the following options:\n" + weaponChoices[0] + " - High base damage.\n" + weaponChoices[1] + " - High stun chance.\n" + weaponChoices[2] + " - High Critical strike chance.");
 var weaponValid = 0;

 //validate weapon choice
 for(var iW = 0; iW < 1; ){
     for (var i = 0; i < weaponChoices.length; i++){
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
     if(weaponValid == 0){
         console.log("I do not possess that weapon. Please listen carefully.");
         userWeapon = prompt("What weapons do you desire to fight with?\n\nChoose from the following options:\n" + weaponChoices[0] + " - High base damage.\n" + weaponChoices[1] + " - High stun chance.\n" + weaponChoices[2] + " - High Critical strike chance.");
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
     if(enemyValid == 0){
         console.log("You cannot fight an imaginary enemy. Please listen carefully.");
         enemyChoice = prompt("Finally, what enemy would you like to fight?\n\nChoose from the following options:\n" + enemyRace[0] + " - Prefers swords.\n" + enemyRace[1] + " - Prefers hammers.\n" + enemyRace[2] + " - Prefers bows.");
     } else{
         iE = 1;
     }
 }

 //Need to calculate damage dealt. If a critical strike occurs, damage dealt = Base Damage * Critical Strike Hit multiplier. If no critical strike, damage dealt = base damage.
 var attack = function baseAttackDamage(baseDamage, critChance, critHit, variance){
     var critStrike = Math.round(Math.random()*100);
     var atkDamage;
     if(critStrike <= critChance*100){
         atkDamage = Math.round(Number(baseDamage)*Number(critHit)*Number(variance));
         return atkDamage;
     } else {
         atkDamage = Math.round(Number(baseDamage)*Number(variance));
         return atkDamage;
     }
 };

 //random number generator for enemy actions
 function enemyDecision(min, max){
     var choice = Math.floor(Math.random()*(max-min)+min);
     return choice;
 }

 //health for battle
 var userHP = 100;
 var enemyHP = 100;
 var availableActions = ["Attack", "Special"];
 var actionValid = 0;

//battle sequence
 while(userHP > 0 && enemyHP > 0) {
     var action = prompt("You have " + userHP + " remaining. Your enemy has " + enemyHP + " remaining. What would you like to do?\n\nPlease select from the following:\n" + availableActions[0] + "\n" + availableActions[1]);
     while(action === ""){
         action = prompt("You must do something.\nYou have " + userHP + " remaining. Your enemy has " + enemyHP + " remaining. What would you like to do?\n\nPlease select from the following:\n" + availableActions[0] + "\n" + availableActions[1]);
     }
     for (var iA = 0; iA < 1; ) {
         for (i = 0; i < availableActions.length; i++){
             if (availableActions[i].toLowerCase() === action.toLowerCase()) {
                 console.log("You chose " + action);
                 if (action.toLowerCase() === availableActions[0].toLowerCase()) {
                     var hitVar = damageVariance(minVar, maxVar);
                     var atkHit = attack(userWeaponDamage, userWeaponCritChance, userWeaponCritHit, hitVar);
                     enemyHP = enemyHP - atkHit;
                     if (enemyHP <= 0) {
                         console.log("You deal " + atkHit + " damage. Your enemy is vanquished! Congratulations!");
                     } else {
                         console.log("You deal " + atkHit + " damage. Your enemy has " + enemyHP + " remaining.");
                     }
                     actionValid++;
                 }
                 if (action.toLowerCase() === availableActions[1].toLowerCase()) {
                     hitVar = damageVariance(minVar, maxVar);
                     atkHit = attack(userWeaponDamage, userWeaponCritChance, userWeaponCritHit, hitVar);
                     enemyHP = enemyHP - atkHit;
                     if (enemyHP <= 0) {
                         console.log("You deal " + atkHit + " damage. Your enemy is vanquished! Congratulations!");
                     } else {
                         console.log("You deal " + atkHit + " damage. Your enemy has " + enemyHP + " remaining.");
                     }
                     actionValid++;
                 }
             }
         }
         if(actionValid == 0){
             action = prompt("You can not do that.\nYou have " + userHP + " remaining. Your enemy has " + enemyHP + " remaining. What would you like to do?\n\nPlease select from the following:\n" + availableActions[0] + "\n" + availableActions[1]);
         } else {
             iA = 1;
         }
     }
     if(enemyHP > 0){
         var enemyAction = enemyDecision(1, 100);
         for (i = 0; i < availableActions.length; i++){
             if(enemyAction <= 80){
                 var enemyHitVar = damageVariance(minVar, maxVar);
                 var enemyAtkHit = attack(enemyDamage, enemyCritChance, enemyCritHit, enemyHitVar);
                 userHP = userHP - enemyAtkHit;
                 if(userHP <= 0){
                     console.log("Your enemy attacked! You take " + enemyAtkHit + " damage. You have been defeated!");
                 } else {
                     console.log("Your enemy attacked! You take " + enemyAtkHit + " damage. You have " + userHP + " remaining.");
                 }
                 i = availableActions.length + 1;
             }
             if(enemyAction > 80){
                 enemyHitVar = damageVariance(minVar, maxVar);
                 enemyAtkHit = attack(enemyDamage*2, enemyCritChance, enemyCritHit, enemyHitVar);
                 userHP = userHP - enemyAtkHit;
                 if(userHP <= 0){
                     console.log("Your enemy used their special ability! You take " + enemyAtkHit + " damage. You have been defeated!");
                 } else {
                     console.log("Your enemy used their special ability! You take " + enemyAtkHit + " damage. You have " + userHP + " remaining.");
                 }
                 i = availableActions.length + 1;
             }
         }
         actionValid = 0;
     }
 }