 /*
Spencer Beard
SDI Section #1
Title
Date
 */

 alert("Hello and welcome to your character creation.");
 console.log("Welcome to the world of JavaCraft");

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
 //set an array to determine intelligence for race
 var magRace = [5, 3, 1, 1, 3, 5];
 //set an array to determine strength for race
 var strRace = [3, 1, 5, 5, 1, 3];
 //set an array to determine agility for race
 var agiRace = [1, 5, 3, 3, 5, 1];

 //create a variable to track the race selected by the User
 var characterRace = prompt("Choose a race from the following:\n" + availableRaces.join(", "));

 //create a variable that is used to validate that the chosen race is one of the options
 var raceValidate = 0;

 //create a loop that will ensure that a valid race has been chosen. If a valid race has not been chosen, the loop will continue to run the prompt until a valid option is selected.
 for(var iR = 0; iR < 1; ) {
     for (var i = 0; i < availableRaces.length; i++) {
         //applied .toLowerCase in order to handle possible discrepancies between caps being used or not used in comparison to the array values.
         //evaluates if the prompt response matches the array
         if (availableRaces[i].toLowerCase() === characterRace.toLowerCase()) {
             console.log("You chose to be a(n) " + characterRace.toLowerCase());
             //sets intelligence stat contribution for racial choice
             magRace = magRace[i];
             console.log("You earn " + magRace + " intelligence.");
             //sets strength stat contribution for racial choice
             strRace = strRace[i];
             console.log("You earn " + strRace + " strength.");
             //sets agility stat contribution for racial choice
             agiRace = agiRace[i];
             console.log("You earn " + agiRace + " agility.");
             //this will alter i in order to close to loop
             i = availableRaces.length + 1;
             //sets validation variable to ensure that a correct race has been chosen
             raceValidate++
         }
     }
     //tests if the entered race is one of the options.
     if (raceValidate == 0) {
         console.log("That is not one of the options. Please enter again.");
         characterRace = prompt("Choose a race from the following:\n" + availableRaces.join(", "));
     } else {
         //if a correct race is chosen, then raceValidate != 0, which sets iR to 1, and closes the choose race loop
         iR = 1;
     }
 }

 //array for available class options
 var availableClasses = ["Warrior", "Mage", "Archer", "Cleric"];
 //array to determine intelligence for classes
 var magClass = [1, 5, 3, 5];
 var strClass = [5, 1, 1, 1];
 var agiClass = [3, 3, 5, 3];

 var characterClass = prompt("Choose a race from the following:\n" + availableClasses.join(", "));
 var classValidate = 0;

 for(var iC = 0; iC < 1; ) {
     for (i = 0; i < availableClasses.length; i++) {
         if (availableClasses[i].toLowerCase() === characterClass.toLowerCase()) {
             console.log("You chose to be a " + characterClass.toLowerCase());
             magClass = magClass[i];
             console.log("You earn " + magClass + " intelligence.");
             strClass = strClass[i];
             console.log("You earn " + strClass + " strength.");
             agiClass = agiClass[i];
             console.log("You earn " + agiClass + " agility.");
             i = availableClasses.length + 1;
             classValidate++
         }
     }

     if (classValidate == 0) {
         console.log("That is not one of the options. Please enter again.");
         characterClass = prompt("Choose a race from the following:\n" + availableClasses.join(", "));
     } else {
         iC = 1;
     }
 }

 var availableGender= ["Male", "Female"];
 var magGender = [3, 5];
 var strGender = [5, 1];
 var agiGender = [1, 3];

 var characterGender = prompt("Choose a gender:\n" + availableGender.join(", "));
 var genderValidate = 0;

 for(var iG = 0; iG < 1; ) {
     for (i = 0; i < availableGender.length; i++) {
         if (availableGender[i].toLowerCase() === characterGender.toLowerCase()) {
             console.log("You chose to be " + characterGender.toLowerCase());
             magGender = magGender[i];
             console.log("You earn " + magGender + " intelligence.");
             strGender = strGender[i];
             console.log("You earn " + strGender + " strength.");
             agiGender = agiGender[i];
             console.log("You earn " + agiGender + " agility.");
             i = availableGender.length + 1;
             genderValidate++
         }
     }
     if (genderValidate == 0) {
         console.log("That is not one of the options. Please enter again.");
         characterClass = prompt("Choose a race from the following:\n" + availableGender.join(", "));
     } else {
         iG = 1;
     }
 }
 var magTotal = parseInt(magRace) + parseInt(magClass) + parseInt(magGender);
 console.log("Total intelligence is " + magTotal);
 var strTotal = parseInt(strRace) + parseInt(strClass) + parseInt(strGender);
 console.log("Total strength is " + strTotal);
 var agiTotal = parseInt(agiRace) + parseInt(agiClass) + parseInt(agiGender);
 console.log("Total intelligence is " + agiTotal);

 console.log("You are " + characterName + ", a Level 1 " + characterGender + " " + characterRace + " " + characterClass + ".");
 console.log("Your starting stats are: " + magTotal + " intelligence, " + strTotal + " strength, and " + agiTotal + " agility. ");
 if(magTotal > strTotal){
     if(magTotal > agiTotal){
         console.log("Your primary attribute is intelligence.");
     }
 }
 if(strTotal > magTotal){
     if(strTotal > agiTotal){
         console.log("Your primary attribute is strength.");
     }
 }

 if(agiTotal > strTotal){
     if(agiTotal > magTotal){
         console.log("Your primary attribute is agility.");
     }
 }