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

 console.log("Hello, " + userName + ". Welcome to the Arena.");

 /*
 var weaponchoices = ["Sword", "Axe", "Bow"]
 var userClass = prompt("Choose from the following options:\nSword - High base damage.\nAxe - High stun chance.\nBow - High Critical strike chance.");
     */