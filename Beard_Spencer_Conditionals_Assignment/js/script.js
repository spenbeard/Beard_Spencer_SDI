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

 var availableRaces = ["Human", "Elf", "Dwarf", "Orc", "Goblin", "Undead"];
 var characterRace = prompt("Choose a race from the following: " + availableRaces);
 var raceValidate = 0;

 for(var iR = 0; iR < 1; ) {
     for (var i = 0; i < availableRaces.length; i++) {
         if (availableRaces[i] === characterRace) {
             console.log("You chose to be " + characterRace);
             i = availableRaces.length + 1;
             raceValidate++
         }
     }

     if (raceValidate == 0) {
         console.log("That is not one of the options. Please enter again.");
         var characterRace = prompt("Choose a race from the following: " + availableRaces);
     } else {
         iR = 1;
     }
 }