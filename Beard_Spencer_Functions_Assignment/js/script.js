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
 var userWeapon = prompt("Choose from the following options:\nSword - High base damage.\nHammer - High stun chance.\nBow - High Critical strike chance.");

 //validate weapon choice
 for (var i = 0; i < weaponChoices.length; ){
     if(weaponChoices[i].toLowerCase() === userWeapon.toLowerCase()){
         console.log("You have chosen to wield a " + userWeapon + ".");
         weaponDamage = weaponDamage[i];
         console.log("Your base damage is " + weaponDamage + ".");
         weaponCritChance = weaponCritChance[i];
         console.log("Your base critical strike chance is " + weaponCritChance*100 + "%.");
         weaponCritHit = weaponCritHit[i];
         console.log("Your base critical strike multiplier is " + weaponCritHit + ".");
         i = weaponChoices.length + 1;
     } else{
         userWeapon = prompt("You must select a valid weapon.\nChoose from the following options:\nHammer - High base damage.\nAxe - High stun chance.\nBow - High Critical strike chance.");
     }
 }

 var damageDealt = function(offDamage, defDefense){
     var totalDamage = Number(offDamage) - Number(defDefense);
     return totalDamage;
 };

 function baseAttackDamage(baseDamage, critChance, critHit){
     var critStrike = Math.round(Math.random()*100);
     if(critStrike <= critChance*100){
         var atkCritDamage = Number(baseDamage)*Number(critHit);
         return atkCritDamage;
     } else{
         var atkDamage = baseDamage;
         return atkDamage;
     }
 }
