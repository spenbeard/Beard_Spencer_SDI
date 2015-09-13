 /*
Spencer Beard
SDI Section #1
Title
Date
 */

 alert("Hello and welcome to your character creation.");


 //conditional for naming the character the user is creating. The loop is set in such a way that it will prompt until a name is entered.
 for(var i = 0; i < 1; ){
     var characterName = prompt("What do you want your character to be called?");
     if (characterName === ""){
         console.log("You must enter a name.");
         i = 0;
     } else {
         console.log("Your character's name is " + characterName);
         i = 1;
     }
 }

 //set up array of races available
 var availableRaces = ["Human", "Elf", "Dwarf", "Orc", "Goblin", "Undead"];

 //create a variable to track the race selected by the User
 var characterRace = prompt("Choose a race from the following:\n" + availableRaces.join(", "));

 //create a variable that is used to validate that the chosen race is one of the options
 var raceValidate = 0;

 for(var iR = 0; iR < 1; ) {
     for (var i = 0; i < availableRaces.length; i++) {
         if (availableRaces[i].toLowerCase() === characterRace.toLowerCase()) {
             console.log("You chose to be a(n) " + characterRace.toLowerCase());
             i = availableRaces.length + 1;
             raceValidate++
         }
     }

     if (raceValidate == 0) {
         console.log("That is not one of the options. Please enter again.");
         characterRace = prompt("Choose a race from the following:\n" + availableRaces.join(", "));
     } else {
         iR = 1;
     }
 }

 var availableClasses = ["Warrior", "Mage", "Archer", "Cleric"];
 var characterClass = prompt("Choose a race from the following:\n" + availableClasses.join(", "));
 var classValidate = 0;

 for(var iR = 0; iR < 1; ) {
     for (var i = 0; i < availableClasses.length; i++) {
         if (availableClasses[i].toLowerCase() === characterClass.toLowerCase()) {
             console.log("You chose to be a " + characterClass.toLowerCase());
             i = availableClasses.length + 1;
             classValidate++
         }
     }

     if (classValidate == 0) {
         console.log("That is not one of the options. Please enter again.");
         characterClass = prompt("Choose a race from the following:\n" + availableClasses.join(", "));
     } else {
         iR = 1;
     }
 }