 /*
Spencer Beard
SDI Section #1
GoTo Week 3
September 11, 2015
 */

//Create an array of fruit names and then sort it

//Array - variable that holds multiple variables
//Index # of an array always starts with 0!!

var bowlOfFruit = ["apple", "banana", "pear", "peach"];

 //see whole array
 console.log(bowlOfFruit);

 //console.log the pear
 console.log(bowlOfFruit[2]);

 //How many items are in an array?
 //length property - acces this by using dot syntax
 //fancy term for use a period

 console.log(bowlOfFruit.length);

 //Count the number of pears in our fruit bowl

 //Create a variable that will keep track of how many pears there are.
 var totalNumPears = 0;

 //Test each item in the the array and check if it is a pear

 //basic structure of a conditional
 // if(condition to test){code that will run if true}

 // "7" == 7 - true
 // "7" === 7 - false
 //prompts always return strings!!

 if(bowlOfFruit[0] === "pear"){
     //this code will run if true
     //add 1 to the total number of pears
     console.log("This item is a pear!");
     totalNumPears ++
 } else {
     console.log("This is not a pear!");
 }