 /*
Spencer Beard
SDI Section #1
GoTo Week 3
September 11, 2015
 */

//Create an array of fruit names and then sort it

//Array - variable that holds multiple variables
//Index # of an array always starts with 0!!

var bowlOfFruit = ["apple", "banana", "pear", "peach", "pear", "banana", "kiwi", "pear", "strawberry", "pear"];
/*
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

 if(bowlOfFruit[1] === "pear"){
     //this code will run if true
     //add 1 to the total number of pears
     console.log("This item is a pear!");
     totalNumPears ++
 } else {
     console.log("This is not a pear!");
 }

 if(bowlOfFruit[2] === "pear"){
     //this code will run if true
     //add 1 to the total number of pears
     console.log("This item is a pear!");
     totalNumPears ++
 } else {
     console.log("This is not a pear!");
 }

 if(bowlOfFruit[3] === "pear"){
     //this code will run if true
     //add 1 to the total number of pears
     console.log("This item is a pear!");
     totalNumPears ++
 } else {
     console.log("This is not a pear!");
 }

 console.log("There are " + totalNumPears + " pear(s) bowl.");
*/
 //Create another variabe to track pears
 var pearNumber = 0;

 //Create a loop for repetitive code

 //For Loop structure
 //for(initializing a counting variable; conditoin to test; increment of change){code to run for each time we loop}

 for(var i =0; i<bowlOfFruit.length; i++){
     console.log("Inside the loop, i = " + i);
     console.log(bowlOfFruit[i]);
     if(bowlOfFruit[i] === "pear"){
         console.log("This item is a pear!");
         pearNumber++;
         console.log("You have "+pearNumber+" pear(s)");
     } else{
         console.log("This is not a pear!");
         console.log("You have "+pearNumber+" pear(s)");
     }
 }

 console.log("The total number of pears in the bowl is "+pearNumber);