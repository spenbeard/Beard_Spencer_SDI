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