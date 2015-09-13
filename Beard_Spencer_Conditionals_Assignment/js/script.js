 /*
Spencer Beard
SDI Section #1
Title
Date
 */

 alert("Hello and welcome to your character creation.");


 //conditional for naming the character the user is creating. The loop is set in such a way that it will prompt 
 for(var i = 0; i < 1; ){
     var characterName = prompt("What do you want your character to be called?");
     if (characterName === ""){
         console.log("You must enter a name.");
         i = 0;
     } else {
         i = 1;
     }
 }