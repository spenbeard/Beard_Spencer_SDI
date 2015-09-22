 /*
Spencer Beard
SDI Section #1
Title
Date
 */

 //Create a file that will give us a random number between two number

//As the user for the min number
 var minNum = prompt("Let's find a number between two numbers!\n What is the min number?");

 //Validate the prompt is not blank and it is a number
 while(minNum==="" || isNaN(minNum)){
     //re-prompt the user
     if(minNum===""){

         minNum = prompt("Please do not leave blank.\nWhat is the min number?");

     } else if(isNaN(minNum)){

         minNum = prompt("Please only use numbers.\nWhat is the min number?");

     }
 }

 /*
 Basic structure of a while loop
 //Declare a variable
 var x = prompt("Type in a number");

 while(x < 6){ //condition to test

    //some sort of change to the variable in our condition to test.
    x++;

 }

  */

 //prompt the user for max number
 var maxNum = prompt("What is the max number");

 //validate directly after prompt.
 while(maxNum==="" || isNaN(maxNum)){
     //re-prompt the user
     if(maxNum===""){

         maxNum = prompt("Please do not leave blank.\nWhat is the max number?");

     } else if(isNaN(maxNum)) {

         maxNum = prompt("Please only use numbers.\nWhat is the max number?");
     }
 }

 //What if I wanted to validate words
 //Ask a yes or no question
 var happy = prompt("Are you happy today?");
//convert to all lower case
 happy = happy.toLowerCase();

 while(happy != "yes" && happy != "no" && happy != "maybe"){
     happy = prompt("Please only use yes, no, or maybe.\nAre you happy today?");
 }

 //Function call - "go button" that runs the function
 //Arguments go inside of the function call ()
 //create a variable to CATCH the returned value
 var returnedValue = randomizr(minNum, maxNum);

 console.log("Your random number between " + minNum + " and " + maxNum + " is " + returnedValue);

 //Create a function to calculate the random number
 //parameters go inside of ()
 //Parameters are temporary variables that can only be accessed inside of the fuction.
 //They catch the arguments that are thrown into the function
 //It makes the code more flexible
 //We DO NOT want to use main code variables inside of functions
 function randomizr(min, max){

     //Generate our random number
     var randomNumber = Math.round(Math.random()*(max-min)+Number(min));
     //console.log(randomNumber);

     //return the value to our main code
     return randomNumber;

 }

 //Wanted 15 random numbers
 //lets use a for loop
 for(var i = 0; i < 15; i++){

     //15 DIFFERENT results
     console.log(randomizr(minNum, maxNum));

 }

 //the browser can not see an anon funciton until it gets to it.

 //Create a anon funciton that adds two numbers together
 //var functionName = function(){};

 var addNums = function(num1, num2){
     var total = Number(num1)+Number(num2);
     return total;
 };

 //function call
 var totalReturned = addNums(minNum, maxNum);
 console.log(totalReturned);
