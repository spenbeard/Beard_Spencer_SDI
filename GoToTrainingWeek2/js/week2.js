/*
Spencer Beard
SDI Section #1
GoTo Training Week #2
9-6-2015
 */

//alert("Test to see if connected");

// Create an age Calculator

//Ask the user for their name
var name = prompt("Let's figure out how old you.\nPlease type in your name");

//Use the variable and say hello
alert("Welcome "+name+"!");

//Ask the user what year they were born
var yearBorn = prompt("What year were you born?");

//console.log the answer to check it
console.log(yearBorn);

//Calculate their age

//We need to know the current year
//Hardcoded - means type in a specific value
var currentYear = 2015;

//figure out age
var age = currentYear - yearBorn;

//alert the user with their age
alert(name+", you are "+age+" years old!");
console.log(name+", you are "+age+" years old!");

//Make it complicated!

//Figure out a future age
var yearsMore = prompt("How many years in the future would you like to know?");

console.log(yearsMore);

//Future age is current age + years in the future
//Cast the variable as a number when using plus signs
var futureAge = age + parseInt(yearsMore);

console.log(futureAge);

//console.log and alert final values
console.log("In "+yearsMore+" years you will be "+futureAge+".");
alert("In "+yearsMore+" years you will be "+futureAge+".");