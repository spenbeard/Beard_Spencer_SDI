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
 //set an array to determine intelligence for races
 var magRace = [5, 3, 1, 1, 3, 5];
 //set an array to determine strength for races
 var strRace = [3, 1, 5, 5, 1, 3];
 //set an array to determine agility for races
 var agiRace = [1, 5, 3, 3, 5, 1];

 //create a variable to track the race selected by the User
 var characterRace = prompt("Choose a race from the following:\n" + availableRaces.join(", "));

 //create a variable that is used to validate that the chosen race is one of the options
 var raceValidate = 0;

 //create a loop that will ensure that a valid race has been chosen. If a valid race has not been chosen, the loop will continue to run the prompt until a valid option is selected.
 for(var iR = 0; iR < 1; ) {
     //loop to evaluate if entered race is in the array
     for (var i = 0; i < availableRaces.length; i++) {
         //applied .toLowerCase in order to handle possible discrepancies between caps being used or not used in comparison to the array values.
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
             //sets validation variable to log that a correct race has been chosen
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
 //array to determine strength for classes
 var strClass = [5, 1, 1, 1];
 //array to determine agility for classes
 var agiClass = [3, 3, 5, 3];

 //prompt user to choose a class
 var characterClass = prompt("Choose a race from the following:\n" + availableClasses.join(", "));
 //create variable for class validation
 var classValidate = 0;

 //create a loop that will ensure that a valid class has been chosen. If a valid class has not been chosen, the loop will continue to run the prompt until a valid option is selected.
 for(var iC = 0; iC < 1; ) {
     //loop to evaluate if entered class is in the array
     for (i = 0; i < availableClasses.length; i++) {
         //applied .toLowerCase in order to handle possible discrepancies between caps being used or not used in comparison to the array values.
         if (availableClasses[i].toLowerCase() === characterClass.toLowerCase()) {
             console.log("You chose to be a " + characterClass.toLowerCase());
             //sets intelligence stat contribution for class choice
             magClass = magClass[i];
             console.log("You earn " + magClass + " intelligence.");
             //sets strength stat contribution for class choice
             strClass = strClass[i];
             console.log("You earn " + strClass + " strength.");
             //sets agility stat contribution for class choice
             agiClass = agiClass[i];
             console.log("You earn " + agiClass + " agility.");
             //this will alter i in order to close the loop
             i = availableClasses.length + 1;
             //sets validation variable to log that a correct class has been chosen
             classValidate++
         }
     }
     //tests if the entered class is one of the options
     if (classValidate == 0) {
         console.log("That is not one of the options. Please enter again.");
         characterClass = prompt("Choose a race from the following:\n" + availableClasses.join(", "));
     } else {
         //if a correct class is chosen, then classValidate != 0, which sets iC to 1, and closes the choose race loop
         iC = 1;
     }
 }

 //array to set gender options
 var availableGender= ["Male", "Female"];
 //array to determine intelligence for classes
 var magGender = [3, 5];
 //array to determine strength for classes
 var strGender = [5, 1];
 //array to determine agility for classes
 var agiGender = [1, 3];

 //prompt user to choose gender
 var characterGender = prompt("Choose a gender:\n" + availableGender.join(", "));
 //sets up validation variable for gender choice
 var genderValidate = 0;

 //create a loop that will ensure that a valid class has been chosen. If a valid class has not been chosen, the loop will continue to run the prompt until a valid option is selected.
 for(var iG = 0; iG < 1; ) {
     //loop to evaluate if entered class is in the array
     for (i = 0; i < availableGender.length; i++) {
         //applied .toLowerCase in order to handle possible discrepancies between caps being used or not used in comparison to the array values.
         if (availableGender[i].toLowerCase() === characterGender.toLowerCase()) {
             console.log("You chose to be " + characterGender.toLowerCase());
             //sets intelligence stat contribution for gender choice
             magGender = magGender[i];
             console.log("You earn " + magGender + " intelligence.");
             //sets strength stat contribution for gender choice
             strGender = strGender[i];
             console.log("You earn " + strGender + " strength.");
             //sets agility stat contributions for gender choice
             agiGender = agiGender[i];
             console.log("You earn " + agiGender + " agility.");
             //this will alter i in order to close the loop
             i = availableGender.length + 1;
             //sets validation variable to log that a correct class has been chosen
             genderValidate++
         }
     }
     //tests if entered gender is one of the options
     if (genderValidate == 0) {
         console.log("That is not one of the options. Please enter again.");
         characterClass = prompt("Choose a race from the following:\n" + availableGender.join(", "));
     } else {
         //if a correct gender is chosen, then genderValidate != 0, which sets iG to 1, and closes the choose gender loop
         iG = 1;
     }
 }
 //totals intelligence from the three choices
 var magTotal = parseInt(magRace) + parseInt(magClass) + parseInt(magGender);
 console.log("Total intelligence is " + magTotal);

 //totals strength from the three choices
 var strTotal = parseInt(strRace) + parseInt(strClass) + parseInt(strGender);
 console.log("Total strength is " + strTotal);

 //totals agility from the three choices
 var agiTotal = parseInt(agiRace) + parseInt(agiClass) + parseInt(agiGender);
 console.log("Total intelligence is " + agiTotal);

 //tells the user the summary of their character
 console.log("You are " + characterName + ", a Level 1 " + characterGender + " " + characterRace + " " + characterClass + ".");
 console.log("Your starting stats are: " + magTotal + " intelligence, " + strTotal + " strength, and " + agiTotal + " agility. ");

 //determines if magic is the highest stat and displays message if it is
 if(magTotal > strTotal && magTotal>agiTotal){
     console.log("Your primary attribute is intelligence.");
 }

 //determines if strength is the highest stat and displays message if it is
 if(strTotal > magTotal && strTotal > agiTotal){
     console.log("Your primary attribute is strength.");
 }

 //determines if agility is the highest stat and displays message if it is
 if(agiTotal > strTotal && agiTotal > magTotal){
     console.log("Your primary attribute is agility.");
 }

 /* test values:

 Input #1:
    Name: Spencer
    Race: Elf
    Class: Mage
    Gender: Male
    Summary Output (code lines 173-194)
    You are Spencer, a Level 1 Male Elf Mage.
    Your starting stats are: 11 intelligence, 7 strength, and 9 agility.
    Your primary attribute is intelligence.

  Input #2:
    Name: Drizzt Do'Urden
    Race: Elf
    Class: Warrior
    Gender: Male
    Summary Output (code lines 173-194)
    You are Drizzt Do'Urden, a Level 1 Male Elf Warrior.
    Your starting stats are: 7 intelligence, 11 strength, and 9 agility.
    Your primary attribute is strength.

  Input #3:
    Name: Jaina Proudmore
    Race: Human
    Class: Mage
    Gender: Female
    Summary Output (code lines 173-194)
    You are Jaina Proudmore, a Level 1 Female Human Mage.
    Your starting stats are: 15 intelligence, 5 strength, and 7 agility.
    Your primary attribute is intelligence.

  Input #4:
    Name: Gazlowe
    Race: Goblin
    Class: Archer
    Gender: Male
    Summary Output (code lines 173-194)
    You are Gazlowe, a Level 1 Male Goblin Archer.
    Your starting stats are: 9 intelligence, 7 strength, and 11 agility.
    Your primary attribute is agility.

  */