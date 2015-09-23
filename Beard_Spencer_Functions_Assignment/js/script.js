 /*
Spencer Beard
SDI Section #1
Title
Date
 */

//console.log("This is a test. This is only a test.");

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
             weaponDamage = weaponDamage[i];
             console.log("Your base damage is " + weaponDamage + ".");
             weaponCritChance = weaponCritChance[i];
             console.log("Your base critical strike chance is " + weaponCritChance*100 + "%.");
             weaponCritHit = weaponCritHit[i];
             console.log("Your base critical strike multiplier is " + weaponCritHit + ".");
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
             console.log("Your enemy's critical strike chance is " + enemyCritChance);
             var enemyCritHit = weaponCritHit[i];
             console.log("Your enemy's critical strike multiplier is " + enemyCritHit);
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
 var attack = function baseAttackDamage(baseDamage, critChance, critHit){
     var critStrike = Math.round(Math.random()*100);
     var atkDamage;
     if(critStrike <= critChance*100){
         atkDamage = Number(baseDamage)*Number(critHit);
         return atkDamage;
     } else {
         atkDamage = baseDamage;
         return atkDamage;
     }
 };
